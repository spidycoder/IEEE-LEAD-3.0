const ApiKey='api_key=97642118c913244cd078fae6b554b2ca';

const BaseUrl='https://api.themoviedb.org/3/';

const ApiUrl=BaseUrl+'/discover/movie?sort_by=popularity.desc&' +ApiKey;

const ImgUrl= 'https://image.tmdb.org/t/p/w500'

const SearchUrl= BaseUrl+ '/search/movie?'+ApiKey;
const main = document.getElementById('main');

const form =document.getElementById('form');
const search= document.getElementById('search');
getMovies(ApiUrl);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML ='';
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview,release_date} = movie;
        const movieEl= document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =`
        <img src="${ImgUrl +poster_path}" alt="${title}">
        
            <div class="movie-info">
               <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>
            <h5 class="release-date">Release Date : ${release_date}</h5>
            <div class="overview">
             <h3>Overview</h3>
             ${overview};
            </div>
        
        
        `
        main.appendChild(movieEl);
    });
}

function getColor(vote){
    if(vote>=8){
        return 'green';;
    }else if(vote>=6){
        return 'orange';
    }else{
        return 'red';
    }
}

form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    const SearchTerm = search.value;

    if(SearchTerm) {
        getMovies(SearchUrl + '&query=' + SearchTerm);
    }else{
        getMovies(ApiUrl);
    }
})




const APIURL = "https://api.themoviedb.org/3/movie/popular?api_key=10b7dd8cbb6bf63bef3a4d0f8f811c29&language=en-US&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w500";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=10b7dd8cbb6bf63bef3a4d0f8f811c29&query=";


const genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
 //ye HTML WALE TAG

const tagsEl = document.getElementById("tags");

var selectedGenre = []
setGenere();
function setGenere(){
  tagsEl.innerHTML= '';
  genres.forEach(genre =>{
    const t = document.createElement('div');
    t.classList.add('tag');
    t.id= genre.id;
    t.innerText= genre.name;
    t.addEventListener('click', () =>{
      if(selectedGenre.length == 0){
        selectedGenre.push(genre.id);
      }
      else{
        if(selectedGenre.includes(genre.id)){
          selectedGenre.forEach((id,idx) =>{
            if(id == genre.id){
              selectedGenre.splice(idx,1);
            }
          })
        }else{
          selectedGenre.push(genre.id);
        }
      }
      console.log(selectedGenre)
      getMovies(APIURL + '&with_genres='+encodeURI(selectedGenre.join(',')))
      highlightSelection();
    })
    tagsEl.append(t);
 })
}

function highlightSelection(){
  const tags =document.querySelectorAll('.tag');
  tags.forEach(tag => {
    tag.classList.remove("highlight")
  })
 clearBtn()
  if(selectedGenre.lenght != 0){
    selectedGenre.forEach(id =>{
      const highlightedTag = document.getElementById(id);
      highlightedTag.classList.add("highlight");
    })
  }
}
function clearBtn(){
  let clearBtn =document.getElementById('clear');
  if(clearBtn){
       clearBtn.classList.add('highlight')
  }else{
    let clear = document.createElement('div');
  clear.classList.add('tag','highlight');
  clear.id = 'clear';
  clear.innerText='clear x';
  clear.addEventListener('click', ()=>{
    selectedGenre = [];
    setGenere();
    getMovies(APIURL);
  })
  tagsEl.append(clear);
  }
  
}