const API_KEY = "api_key=e09e73373fe71e5e88a2defeacfd7210";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById("main");
const form = document.getElementById("form");
const tags = document.getElementById("tags");
const prev = document.getElementById("prev");
const current = document.getElementById("current");
const next = document.getElementById("next");

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = "";
var totalPages = 100;

const GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
let url = BASE_URL + "/discover/movie?" + API_KEY;

getMovies(API_URL);

var selectedGenre = [];
setGenre();

function setGenre() {
  tags.innerHTML = "";
  GENRES.forEach((genre) => {
    const t = document.createElement("div");
    t.classList.add("tag");
    t.id = genre.id;
    t.innerHTML = genre.name;
    t.addEventListener("click", () => {
      if (selectedGenre.length == 0) {
        selectedGenre.push(genre.id);
      } else {
        if (selectedGenre.includes(genre.id)) {
          selectedGenre.forEach((id, idx) => {
            if (id == genre.id) {
              selectedGenre.splice(idx, 1);
            }
          });
        } else {
          selectedGenre.push(genre.id);
        }
      }
      getMovies(API_URL + "&with_genres=" + encodeURI(selectedGenre.join(",")));
      highlightSelection();
    });
    tags.append(t);
  });
}

function highlightSelection() {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => {
    tag.classList.remove("highlight");
  });
  clearBtn();
  if (selectedGenre.length != 0) {
    selectedGenre.forEach((id) => {
      const highlightedTag = document.getElementById(id);
      highlightedTag.classList.add("highlight");
    });
  }
}

function clearBtn() {
  if(selectedGenre.length == 0){
    document.getElementById("clear").remove()
  }else{
    let clearBtn = document.getElementById("clear");
    if (clearBtn) {
      clearBtn.classList.add("highlight");
    } else {
      let clear = document.createElement("div");
      clear.classList.add("tag", "highlight");
      clear.id = "clear";
      clear.innerText = "Clear x";
      clear.addEventListener("click", () => {
        selectedGenre = [];
        setGenre();
        getMovies(API_URL);
      });
      tags.append(clear);
    }
  }
}

function getMovies(url) {
  lastUrl = url;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.results.length !== 0) {
        showMovies(data.results);
        currentPage = data.page;
        nextPage = currentPage + 1;
        prevPage = currentPage - 1;
        totalPages = data.total_pages;
        current.innerText = currentPage;

        if (currentPage <= 1) {
          prev.classList.add("disabled");
          next.classList.remove("disabled");
        } else if (currentPage >= totalPages) {
          prev.classList.remove("disabled");
          next.classList.add("disabled");
        } else {
          prev.classList.remove("disabled");
          next.classList.remove("disabled");
        }
        search.scrollIntoView({ behavior: "smooth" });
      } else {
        main.innerHTML = `<h1 class="noResults">No Results Found</h1>`;
      }
    });
}

function showMovies(data) {
  main.innerHTML = ``;
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
                <img src="${
                  poster_path
                    ? IMG_URL + poster_path
                    : "https://via.placeholder.com/1080x1580"
                }"
                    alt="${title}">
                <div class="movieInfo">
                    <h3>${title}</h3>
                    <h5 class = "date">Release Date: ${release_date}</h5>
                    <span class="${getColor(
                      vote_average
                    )}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
        `;
    main.appendChild(movieEl);
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  }
  return "red";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  selectedGenre = [];
  setGenre();
  if (searchTerm) {
    getMovies(SEARCH_URL + "&query=" + searchTerm);
  } else {
    getMovies(API_URL);
  }
});

next.addEventListener("click", () => {
  if (nextPage <= totalPages) {
    pageCall(nextPage);
  }
});

prev.addEventListener("click", () => {
  if (prevPage > 0) {
    pageCall(prevPage);
  }
});

function pageCall(page) {
  let urlSplit = lastUrl.split("?");
  let queryParams = urlSplit[1].split("&");
  let key = queryParams[queryParams.length - 1].split("=");
  if (key[0] != "page") {
    let url = lastUrl + "&page=" + page;
    getMovies(url);
  } else {
    key[1] = page.toString();
    let a = key.join("=");
    queryParams[queryParams.length - 1] = a;
    let b = queryParams.join("&");
    let url = urlSplit[0] + "?" + b;
    getMovies(url);
  }
}
