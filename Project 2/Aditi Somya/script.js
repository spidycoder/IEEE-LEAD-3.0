let movie_searched = document.getElementById("searchbar");
let search_button = document.getElementById("button");
let result = document.getElementById("res");
let post = document.getElementById("gc1");
let scpt = document.getElementById("gc2");
let plott = document.getElementById("child2");
let main = document.getElementById("mains");

let get_movie = () => {
  let movie_name = movie_searched.value;
  let url = `https://www.omdbapi.com/?t=${movie_name}&apikey=${key}`;
  if (movie_name.length <= 0) {
    result.innerHTML = '<h3 class="msg">ENTER A MOVIE</h3>';
    post.innerHTML = ``;
    scpt.innerHTML = ``;
    plott.innerHTML = ``;
    console.log(movie_name);

  }
  else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == 'True') {
          console.log(data);
          result.innerHTML = `<div class="name">${data.Title}</div>
            <div class="rating">
            <img src="./images/star.png" class="star">
            ${data.imdbRating}

           </div>
            `
            ;
          post.innerHTML = `<img src=${data.Poster} class="film_post">`;
          scpt.innerHTML = `
            
            <div class="info">
             <div class="ryr"> ${data.Rated}</div>
             <div class="ryr"> ${data.Year}</div>
             <div class="ryr"> ${data.Runtime}</div>
            </div>
            `;
          plott.innerHTML = `
           <div class= "key_pts">
           <div class="ryr">
            ${data.Genre.split(",").join("<div></div>")}
           
           </div>
          <div>
          <h1 class="msg2"> PLOT</h1>
          <p class="ryr">${data.Plot}</p>
          </div>
<h1 class="msg2">ACTORS</h1>
<p class="ryr">${data.Actors}</p>
           </div>

           `;
        }
        else {
        
          result.innerHTML = `<h2 class="msg">MOVIE NOT FOUND!</h2>`;
          post.innerHTML = ``;
          scpt.innerHTML = ``;
          plott.innerHTML = ``;
        }

      });

  }

};
function get_popular(url) {
  fetch(url).then(res => res.json()).then(data => {
    display_movies(data.results);
    console.log(data);
  })
};
get_popular(api_url);
function display_movies(data) {
  main.innerHTML = ``;
  data.forEach(movie => {
    const { poster_path, vote_average } = movie;
    const movieEL = document.createElement('div');
    movieEL.classList.add('section_child');
    movieEL.innerHTML = `
      <div class="moviee">
      <img src="${img_url + poster_path}" class="hry">
  </div>
  <div class="moviee_rating">
      
      <span>${vote_average}<img src="./images/star.png" class="star"></span>
  </div>
      
      `;
    main.appendChild(movieEL);
  })
};
document.querySelector("#searchbar").addEventListener("keyup",function(event){
  if(event.key=="Enter"){
      get_movie();
  }
})
search_button.addEventListener("click", get_movie);
window.addEventListener("load", get_movie);