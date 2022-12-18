let tmdb_apikey = "9628d347c1c6bfba92c7a10598fb4224"
let omdb_apikey = "5dde5413"

let sidebaropen = false
function sidebaron() {
  if (sidebaropen == false){
    document.getElementById("mysidebar").style.width = "90px";
    sidebaropen = true
    console.log("open")
  }
  else{
    document.getElementById("mysidebar").style.width = "0";
    sidebaropen = false
    console.log("close")
  }
}

function sidebaroff() {
  document.getElementById("mysidebar").style.width = "0";
  sidebaropen = false
}



const urlParams = new URLSearchParams(window.location.search)
let myid = urlParams.get('id')
let searchresult = urlParams.get('search')
let urlhi = "https://api.themoviedb.org/3/movie/"+myid+"?language=en-US&api_key="+tmdb_apikey

if (myid != undefined) {
  fetchdatabyid()
}
else if (searchresult != undefined) {
  fetchimdbid()
}


async function fetchimdbid(){
  const res = await fetch("https://www.omdbapi.com/?apikey=5dde5413&t="+(searchresult.split(' ')).join('+'))
  const Dataomdb = await res.json()
  let imdbid = Dataomdb.imdbID
  let urlhi1 = "https://api.themoviedb.org/3/find/"+imdbid+"?api_key="+tmdb_apikey+"&language=en-US&external_source=imdb_id"
  console.log(urlhi1)
  
  if (Dataomdb.Response == "True"){
    const response1 = await fetch(urlhi1);
    const Data1 = await response1.json();
    let urlhi = "https://api.themoviedb.org/3/movie/"+Data1.movie_results[0].id+"?language=en-US&api_key="+tmdb_apikey
    const response = await fetch(urlhi);
    const Datatmdb = await response.json();
    setresult(Dataomdb, Datatmdb)
  }
  else {
    let floating = document.getElementById("outercovering")
    document.body.style.fontSize = '9vw';
    let errormsg = `<p style="padding-top : 100px; padding-left : 2%; font-family : sans-serif; text-align: center;">¯\\_(ツ)_/¯ <br>NO MOVIES FOUND</p>
    `
    floating.innerHTML = errormsg;
  }
}

async function fetchdatabyid(){
    const response = await fetch(urlhi);
    const Datatmdb = await response.json();
    const res = await fetch("https://www.omdbapi.com/?apikey=5dde5413&t="+(Datatmdb.title).split(' ').join('+'))
    const Dataomdb = await res.json()
    setresult(Dataomdb, Datatmdb)
}

function setresult(Dataomdb, Datatmdb) {
    let bg = document.getElementById("moviebackground")
    let template = `
          <div class="movieslider-img">
              <img src="https://image.tmdb.org/t/p/w500/${Datatmdb.backdrop_path}" alt="poster"/>
          </div>
    `
    bg.innerHTML = template;
    let moviecontainer = document.getElementById("floatingcontainer")
    let pic = Datatmdb.poster_path
    if (pic != null) {
      pic = "https://image.tmdb.org/t/p/w500/"+pic
    }
    else {
      pic = Dataomdb.Poster
    }
    console.log(pic)
    let moviedata = `
    <div class="posterofmovie">
      <img src="${pic}" alt="" style="width: 100%; align-items: center;">
    </div>
    <div class="moviedetails">
      <h1 style="padding-top: 6%; padding-left: 6%; font-size: 40px;">${Datatmdb.title}</h1>
      <h3 style="padding-top:1%; padding-left: 6%"> Genre : ${Dataomdb.Genre}</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> Release on: ${Datatmdb.release_date}</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> Director : ${Dataomdb.Director}</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> Cast : ${Dataomdb.Actors}</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> Runtime : ${Dataomdb.Runtime}</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> Rating: ${Datatmdb.vote_average} / 10</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> Plot:</h3>
      <h3 style="padding-top:1%; padding-left: 6%"> ${Datatmdb.overview} <br> &nbsp;</h3>
    </div>
    `
    moviecontainer.innerHTML = moviedata;
}

document.addEventListener("DOMContentLoaded", function(){
    const progressbarinner = document.querySelector('.progress-bar-inner')

    window.addEventListener("scroll", function(){
        let h = document.documentElement
        let st = h.scrollTop || document.body.scrollTop
        let sh = h.scrollHeight || document.body.scrollHeight

        let percent = st / (sh - h.clientHeight) * 100
        progressbarinner.style.width = percent + "%"
    });
});