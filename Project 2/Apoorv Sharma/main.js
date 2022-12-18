const api_key = 'api_key=ddcfd301826bc5ce17015fd73c4bf8a5';
const base = 'https://api.themoviedb.org/3';
const latest_url = base + '/discover/movie?sort_by=popularity.desc&' + api_key;

function getData(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        addData(data.results);
    })
}

function addData(arr){
    console.log(arr);
    document.getElementById('main').innerHTML = ``;

    for(i = 0; i < arr.length; i++){
        const movie = document.createElement('div');
        movie.classList.add('box');
        movie.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${arr[i].poster_path}" alt="${arr[i].title}" class="img" id="img${i}">
        <div class="description">
            <div class="name" id="name${i}">Name</div>
            <div class="hidden" id="hidden${i}">
                <div class="overview" id="overview${i}">Lorem, ipsum dolor sit </div>
            </div>
            <div class="bottom" id="bottom${i}">
                <span class="rating" id="rating${i}">0.0</span>
                <span class="year" id="year${i}">1996</span>
            </div>
        </div>
        `

        var nmid = 'name' + i;
        var ovid = 'overview' + i;
        var ratid = 'rating' + i;
        var yid = 'year' + i;
        var year = arr[i].release_date;

        function limit (string = '', limit = 0) {  
            return string.substring(0, limit)
        }
        var lyear = limit(year, 4);
        var overview = arr[i].overview
        var ov = limit(overview, 450)
        if(overview.length > 400){
            ov += '...'
        }

        document.getElementById('main').appendChild(movie);
        document.getElementById(ovid).innerText = ov;
        document.getElementById(nmid).innerText = arr[i].title;
        document.getElementById(ratid).innerText = arr[i].vote_average;
        document.getElementById(yid).innerText = lyear;

        if(arr[i].vote_average > 7){
            document.getElementById(ratid).style.backgroundColor = "rgb(79, 176, 79)"
        }
        else if(arr[i].vote_average < 4){
            document.getElementById(ratid).style.backgroundColor = "rgb(183, 70, 70)"
        }
        else{
            document.getElementById(ratid).style.backgroundColor = "#f3ce13"
        }
    }
}

getData(latest_url);
const search_box = document.getElementById('search');
document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();

    const search = search_box.value;
    const search_url = base + '/search/movie?' + api_key + `&query=${search}`
    if(search){
        getData(search_url)
    }
    else{
        getData(latest_url);
    }
})


