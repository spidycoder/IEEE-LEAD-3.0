import "../App.css";
import React, { useEffect, useState } from 'react';
import MovieResultCard from "./MovieResultCard";
import Header from "./Header";
import Footer1 from "./footer";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import Close from "@mui/icons-material/Close";
import initdata from "./data";



function HomePage() {

  const initarray =initdata;
  const [filteredData, setFilterData] = useState(initarray);
  const [search, setSearch] = useState();
  const[close,setClose]=useState("");
  const [i, seti] = useState(0);
  const [j, setj] = useState(12);
  const data = useLocation();
  const de = data?.state?.status;




  function handleFilter(e) {
  e.preventDefault();
    const searchWord = document.getElementById("hehe").value;
    console.log(searchWord)
    setSearch(searchWord);


  };

  function toggle(word) {
    const arr = ["Trending", "Latest", "Popular"]
    arr.map((res) => {
        console.log(res == word)
        if (res == word) {

            document.getElementById(`${res}`).className = "font-medium text-lg text-blue-500 cursor-pointer border-b-4 pb-2 border-blue-400 "


        }
        else {
            document.getElementById(`${res}`).className = "font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"

        }

    })
}


  async function fetchMovie(url) {
    

    const res = await fetch(url)

      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
        console.log(response.json);
        
      })
      .then(({ results: films }) => {

        const Data = films;
        Data.map((res) => {
          
          if (res.poster_path === null) {
            res.poster_path = "/vZ9WvnZnhEsyMpxxTyGhZGdoBaS.jpg"
            console.log("null poster value")
          }
          res.poster_path = "https://image.tmdb.org/t/p/w500" + res.poster_path;
          res.vote_average=Math.round(res.vote_average *10)/10;

        })
        setFilterData(Data)
        seti(0);
        setj(12);
       
        console.log(filteredData);

      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  function Create(movie) {
    return (
      <Link to={{ pathname: `/${movie.id}` }} state={{ movie }} className='bg-white rounded-lg hover:scale-[1.06]  duration-[150ms] shadow-2xl shadow-black'>
        <MovieResultCard
          rating={movie.vote_average}
          title={movie.title ? movie.title : movie.original_name}
          description={movie.overview.substring(0, 150) + "..."}
          img={movie.poster_path}
          id={movie.id}
          year={movie.release_date ? movie.release_date : movie.first_air_date}
          media={movie.media_type}
        ></MovieResultCard>
      </Link>
    )
  };

  function hii(){
    alert("dont click me")
 }




  useEffect(() => {
    if (de === "trending" && search == null) {
      fetchMovie(`https://api.themoviedb.org/3/trending/movie/day?api_key=f4d13e54ee0dd343bf1d107564f37d83`)
    }
    else if (de === "latest" && search == null) {
      fetchMovie(`https://api.themoviedb.org/3/trending/movie/week?api_key=f4d13e54ee0dd343bf1d107564f37d83`)
    }
    else if (de === "popular" && search == null) {
      fetchMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=f4d13e54ee0dd343bf1d107564f37d83#`)
    }
    else if (search == null) {
      fetchMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=f4d13e54ee0dd343bf1d107564f37d83#`)
    }
    else {
      fetchMovie(`https://api.themoviedb.org/3/search/movie?api_key=f4d13e54ee0dd343bf1d107564f37d83&query=${search}`)
      
    }
  }, [search]);

  return (
    <div>
      <div className=' bg-[url("https://i.stack.imgur.com/yDr7J.jpg")]'>
        <Header topclass="sticky top-0 z-10 text-white bg-[#111827]" on1={(event)=> {fetchMovie(`https://api.themoviedb.org/3/trending/movie/day?api_key=f4d13e54ee0dd343bf1d107564f37d83`); setClose("");document.getElementById("hehe").value=""; toggle(event.target.innerText);}} on2={(event) => {fetchMovie(`https://api.themoviedb.org/3/trending/movie/week?api_key=f4d13e54ee0dd343bf1d107564f37d83`); setClose("");document.getElementById("hehe").value="";toggle(event.target.innerText);}} on3={(event) => {fetchMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=f4d13e54ee0dd343bf1d107564f37d83#`); setClose("");document.getElementById("hehe").value="";toggle(event.target.innerText);}} className="" />
        <div className="rounded-b-2xl w-[96%] md:w-[80%] mx-auto pl-10 pt-6 pb-8 md:pb-0  bg-[url('https://img5.goodfon.com/wallpaper/nbig/1/61/fon-netflix-logo-raduga-tsvet-fon-background-skachat-oboi-sk.jpg')]" style={ {backgroundImage: `linear-gradient(rgba(255,255,255,0.11),rgba(0,0,0,0.2)) ,url('https://img5.goodfon.com/wallpaper/nbig/1/61/fon-netflix-logo-raduga-tsvet-fon-background-skachat-oboi-sk.jpg' )`}}>

          <p className="text-5xl md:text-6xl text-white mb-2">Welcome</p>
          <p className="text-4xl md:text-5xl text-white tracking-wide brightness-150 ">Million of movies,TV shows and people to discover. Explore now.</p>
          <form onSubmit={(event)=>handleFilter(event)} className=" text-center ">
            <input id="hehe"onChange={(event)=>{setClose(event.target.value)}} type="text" placeholder="What are you loooking for..." className=" bg-gray-900 text-white mt-10 mb-12 w-[60%] md:w-[60%] h-12 rounded-xl pl-5 ml-10  "  />
            <SearchIcon onClick={(event)=>handleFilter(event)} className=" text-blue-500 font-semibold md:scale-[1.3] relative top-[3.5rem] right-[32%]  md:top-0 bg-white scale-[1.4]  px-1 py-1 rounded-full md:bg-transparent md:right-10 bottom-0.5 " />
           {close===""?<div className="relative invisible left-[74%] bottom-[5.2rem] w-fit  "><Close onClick={(event)=>{document.getElementById("hehe").value=""; setClose("") }} className=" text-blue-500 font-semibold md:scale-[1.2] bg-white scale-[1.4]  px-1 py-1 rounded-full hover:bg-gray-300 md:bg-transparent  md:bg-gray-200  " /></div>:<div className="relative  left-[74%] bottom-[5.2rem] w-fit  "><Close onClick={(event)=>{document.getElementById("hehe").value=""; setClose("") }} className=" text-blue-500 font-semibold md:scale-[1.2] bg-white scale-[1.4]  px-1 py-1 rounded-full hover:bg-gray-300 md:bg-transparent  md:bg-gray-200  " /></div>} 
          </form>

        </div>

        <div className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 h-fit mt-10 ">
          {filteredData.slice(i, j).map(Create)}
        </div>

        <div className="mt-10 w-[78%] mb-6 rounded-lg border-white border-[1px] bg-[#111827] mx-auto px-10 py-4">
          {i !== 0 ? <button className=" hover:bg-blue-500 hover:text-white  h-10 w-20 text-xl bg-white rounded-lg mr-4" onClick={() => {
            seti(i - 12);
            setj(j - 12);

          }}>back</button> : null}
          <button className="hover:bg-blue-500 hover:text-white  h-10 w-20 text-xl bg-white rounded-lg " onClick={() => {

            seti(i + 12);
            setj(j + 12);



          }}>next</button>
        </div>



        <Footer1 />
      </div>
    </div>

  );
};

export default HomePage;

