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
let searchresult = urlParams.get('search')
let urlhi = "https://api.themoviedb.org/3/search/movie?api_key=9628d347c1c6bfba92c7a10598fb4224&query="+(searchresult.split(' ')).join('+')

fetchresults()

async function fetchresults(){
    const res = await fetch(urlhi)
    const Datatmdb = await res.json()
    let sresults = document.getElementById("search_results")
    let template = '';
    if (Datatmdb.results.length > 0){
      for(let i = 0 ; i < Datatmdb.results.length ; i++) {
        template += `
        <a href="moviepage.html?id=${Datatmdb.results[i].id}" style="text-decoration: none;">
        <div class="moviesection" id="moviesection">
            <div id="poster">
                <img src="https://image.tmdb.org/t/p/w500/${Datatmdb.results[i].poster_path}" alt="" style="width: 100%; align-items: center; border-radius: 10px">
            </div>
            <div id="details">
                <h1>${Datatmdb.results[i].original_title}</h1>
                <h3 style="padding-top: 7px">release date: ${Datatmdb.results[i].release_date}</h3>
                <h3>rating - ${Datatmdb.results[i].popularity}</h3>
                <h3 id="aboutmovie">${(Datatmdb.results[i].overview).split(" ").slice(0,30).join(" ")} ...more</h3>
            </div>
        </div>
        </a>
        `
      }
    }
    else {
      template += `<p style="padding-top : 100px; padding-left : 2%; font-family : sans-serif; text-align: center; font-size:70px; color:white">¯\\_(ツ)_/¯ <br>NO MOVIES FOUND</p>
      <p style="padding-left : 2%; font-family : sans-serif; text-align: center; font-size:13px; color:white">OR CHECK FOR TYPING ERRORS</p>`
    }
    sresults.innerHTML = template
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