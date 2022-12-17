/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer1 from './footer';
import Header from './Header';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


function MoviePage(props) {
    let data = useLocation();
    let de = data.state.movie;



    const [arr, setarr] = useState({});
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${de.id}?api_key=f4d13e54ee0dd343bf1d107564f37d83&language=en-US`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
                console.log(response.json);
            })
            .then((films) => {


                if (films.poster_path === null) {
                    films.poster_path = "/vZ9WvnZnhEsyMpxxTyGhZGdoBaS.jpg"
                    console.log("null poster value")
                }
                films.poster_path = "https://image.tmdb.org/t/p/original" + films.poster_path;

                if (films.backdrop_path === null) {
                    films.backdrop_path = "https://wallpapers.com/images/hd/starry-sky-night-dark-sky-stars-zeyj6p1s41agbk57.jpg"
                    console.log("null poster value")
                }
                else{
                    films.backdrop_path = "https://image.tmdb.org/t/p/original" + films.backdrop_path;
                }
                
                

                console.log(films);
                setarr(films);
                console.log("this is detaile movie list");
                console.log(arr);


            })
            .catch((err) => {
                console.log(err.message);
            });

    }, []);


    let gen = arr.genres;
    let min=arr.runtime%60;
    let hour=Math.floor(arr.runtime/60);
    return (
        <div className='bg-cover'  style={ {backgroundImage: `linear-gradient(rgba(255,255,255,0.07),rgba(0,0,0,1)) ,url(${arr.backdrop_path} )`}}>
            <Header topclass=" bg-gradient-to-b from-black via-black/60 text-white brightness-200"></Header>
            <div className='lg:flex brightness-100 bg-cover text-white' >
              

                    <img src={arr.poster_path} className=' h-[40%] w-[60%] lg:w-96 lg:h-[80%] rounded-2xl mx-auto lg:mx-0 lg:ml-[5%] lg:mr-[1%] lg:mt-16 lg:pt-0 pt-20 lg:mb-16'></img>
                
                <div className='info mb-20 pb-28 backdrop-blur-sm backdrop-brightness-105 bg-black/75 mr-10 ml-[5%] md:ml-[0%] mt-16 lg:mb-16 rounded-2xl div   pl-5'>
                    <div className='text-5xl md:text-6xl font-medium mt-6 pt-12 md:pt-0'>
                        <p>{arr.title}</p>

                    </div>
                    <p className='mt-1 ml-2 text-lg'>{arr.tagline }</p>
                    <p className='mt-1 ml-2 text-base'><AccessTimeFilledIcon className='mr-2 -mt-1 -ml-1'/>{hour+"h "+min+" min" }</p>
                    <p className='text-2xl mt-6 pt-2 ml-2'>{arr.release_date}</p>
                    <div className='space-y-2 lg:flex '>
                        <p className='text-lg flex pt-6 ml-2'>popularity :<p className='ml-2 bg-white py-0.5 text-base font-medium w-fit px-2 rounded-lg text-black'> { Math.round(arr.popularity *10)/10}</p></p>
                        <div className='flex pt-5 ml-2 lg:ml-20'>  <img src="data:image/png;base64,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" className='h-6 rounded-md w-12 '>
                        </img>
                            <div className=" tex-base font-medium  ml-2 -mt-0.5  text-white">{Math.round(arr.vote_average *10)/10}</div> </div>
                    </div>
                    <div>
                        <div className='text-3xl font-medium ml-1 mt-10'>
                            Overview
                        </div>
                        <div className='genres  lg:flex mt-4 ml-1'>
                        {(gen?.[0]?.name)?<div className='w-fit bg-white py-1 font-medium px-2 rounded-lg text-black mb-4 lg:mb-0 lg:mr-6'>{(gen?.[0]?.name)}</div>:null}
                        {(gen?.[1]?.name)?<div className='w-fit bg-white py-1 font-medium px-2 rounded-lg text-black  mb-4 lg:mb-0 lg:mr-6'>{(gen?.[1]?.name)}</div>:null}
                            {(gen?.[2]?.name)?<div className='w-fit bg-white py-1 font-medium px-2 rounded-lg text-black'>{(gen?.[2]?.name)}</div>:null}
                            
                        </div>


                        <p className='mt-6  w-[90%] text-lg '>
                            {arr.overview}
                        </p>
                    </div>


                </div>
            </div>
            <Footer1 />

        </div>
    )
};

export default MoviePage;
