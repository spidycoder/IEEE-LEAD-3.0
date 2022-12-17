import "../App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';



function ProjectCard(props) {
    return (

        <div className="">
            <div data-aos="zoom-in-up" data-aos-duration="600" class=" max-w-sm shadow-lg hover:shadow-xl shadow-black/70 hover:shadow-black/80 hover:scale-150 duration-200 mx-4 my-4 bg-[#111827] rounded-lg border border-gray-200 shadow-md  dark:border-gray-700">
                <a >
                    <img class="rounded-t-lg mx-auto w-[100%]" src={props.img} alt=""></img>
                </a>
                <div class="p-5">
                    <a >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{props.name}</h5>
                    </a>
                    <p class="mb-8 font-normal text-gray-400">{props.desc}</p>
                    <a href={props.sitelink} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Link
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href={props.gitlink} class="ml-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        GitHub Repo
                        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>


    )
}

export default ProjectCard;

