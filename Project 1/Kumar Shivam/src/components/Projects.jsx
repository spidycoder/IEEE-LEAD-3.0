import "../App.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ProjectCard from "./ProjectCard";





function Project(props) {




    return (
        <div id="project" className=" pt-24 dark:bg-yellow-500 bg-slate-100 h-fit pb-20  text-black">


            <div className="text-center mb-16 "><mark className="bg-blue-700  text-white px-3 font-semibold py-2 rounded-2xl text-4xl md:text-5xl lg:text-6xl ">Projects</mark></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit  mx-auto ">
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/movie_api" sitelink="https://bingewatchers69.netlify.app" name="Bingewatchers" desc="Bingewatchers is a movie database. Search your favourite movies and see information about them. It uses TMDB movie api to fetch data and uses React JS." img="https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/636c16dc5189e5000aa08c1e/screenshot_2022-11-09-21-09-17-0000.png" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/portfolio_website" sitelink="https://kumarshivam18.netlify.app" name="Portfolio" desc="This is a portfolio website. It has details related to my skills & projects. It also has a Codeforces rating page which uses CF Api to fetch data. It uses React JS." img="https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/639c23ed792b9c0008e557cc/screenshot_2022-12-16-07-53-45-0000.png" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/Job-hiring-platform" sitelink="https://hiringplatform18.netlify.app" name="BackBenchers" desc="Backbenchers is a job hiring and posting platform. People can search for the jobs and apply for them. This site is still under development. " img="https://screenshot-proxy.netlify.app/f_webp,w_336/https://d33wubrfki0l68.cloudfront.net/635d832c307d44273b68fc4c/screenshot_2022-10-29-19-47-59-0000.png" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard name="Demo project" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://wallpaperaccess.com/full/268335.jpg" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard name="Demo project" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://wallpaperaccess.com/full/268335.jpg" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard name="Demo project" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img="https://wallpaperaccess.com/full/268335.jpg" /></div>

            </div>


        </div>



    )
}

export default Project;

