let sidebaropen = false
let stillopen = false
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
// document.addEventListener("click", function(){
//   if (sidebaropen == true) {
//     document.getElementById("mysidebar").style.width = "0";
//     sidebaropen = false;
//   }
// });

function changemode() {
  document.body.style.background = 'white';
  document.getElementById("navigation").style.background = "#ffffffcb";
  document.getElementById("logo").style.color = '#18bdda';
  document.getElementById("progress-bar-inner").style.background= '#18bdda';
  document.getElementById("navbutton").style.color = '#18bdda';
}


function sidebaroff() {
  document.getElementById("mysidebar").style.width = "0";
  sidebaropen = false
}

let tmdb_apikey = "9628d347c1c6bfba92c7a10598fb4224"
let omdb_apikey = "5dde5413"
const BASE_URL = "https://image.tmdb.org/t/p/w500/"
// 
// using <a href="moviepage.html?id=${Data1.results[i].id}" class="movieslider-textup"> for redirect
// 
async function fetchdata(){
  const response1 = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key="+tmdb_apikey+"&language=en-US");
  const Data1 = await response1.json();
  let latest = document.getElementById("swiper-wrapper-latest")
  let template = '';
  for(let i = 0 ; i < Data1.results.length ; i++) {
    template += `
    <div class="swiper-slide">
      <div class="movieslider-box" style="border-radius: 10px">
          <a href="moviepage.html?id=${Data1.results[i].id}" class="movieslider-textup" target="_blank">
              ${Data1.results[i].title}
          </a>
          <div class="movieslider-img">
              <img src="https://image.tmdb.org/t/p/w500/${Data1.results[i].poster_path}" alt="poster"/>
          </div>
      </div>
    </div>
    `
  }
  latest.innerHTML = template

  const response2 = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key="+tmdb_apikey+"&language=en-US");
  const Data2 = await response2.json();
  toprated = document.getElementById("swiper-wrapper-toprated")
  template = '';
  for(let i = 0 ; i < Data2.results.length ; i++) {
    template += `
    <div class="swiper-slide">
      <div class="movieslider-box" style="border-radius: 10px">
          <a href="moviepage.html?id=${Data2.results[i].id}" class="movieslider-textup" target="_blank">
              ${Data2.results[i].title}
          </a>
          <div class="movieslider-img">
              <img src="https://image.tmdb.org/t/p/w500/${Data2.results[i].poster_path}" alt="poster"/>
          </div>
      </div>
    </div>
    `
  }
  toprated.innerHTML = template

  const response3 = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key="+tmdb_apikey+"&language=en-US");
  const Data3 = await response3.json();
  upcoming = document.getElementById("swiper-wrapper-upcoming")
  template = '';
  for(let i = 0 ; i < Data3.results.length ; i++) {
    template += `
    <div class="swiper-slide">
      <div class="movieslider-box" style="border-radius: 10px">
          <a href="moviepage.html?id=${Data3.results[i].id}" class="movieslider-textup" target="_blank">
              ${Data3.results[i].title}
          </a>
          <div class="movieslider-img">
              <img src="https://image.tmdb.org/t/p/w500/${Data3.results[i].poster_path}" alt="poster"/>
          </div>
      </div>
    </div>
    `
  }
  upcoming.innerHTML = template
}
fetchdata()

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