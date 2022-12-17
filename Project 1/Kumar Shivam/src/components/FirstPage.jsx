import "../App.css";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Typewriter from 'typewriter-effect';



function Intro() {


  return (
    <div id="about" className=" pt-0 md:pt-6 md:h[46rem] bg-yellow-500 dark:text-slate-300 dark:bg-[#111827]">
      <div className="lg:flex  ">
        <div className="left flex-col pl-[6%] w-[60%] ">
          <div id="head" className=" mb-6 flex-col text-2xl font-alb space-y-3 pt-[15%]">

            <p className=" relative   bottom-3 md:bottom-6 left-1 font-semibold  tracking-wider text-red-600 dark:text-yellow-500 ">Namaskar,It's</p>
            <p id="name" className="h-40 w-fit"> <Typewriter options={{
              strings: ['kumar shivam'],
              autoStart: true,
              loop: true,
              wrapperClassName: "font-title text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] bg-gradient-to-r text-transparent bg-clip-text dark:from-white dark:via-slate-300 dark:to-slate-800 from-black via-[#111827]  to-yellow-600 ",
              pauseFor: 1000,
              delay: 150,
              deleteSpeed: 50,
              cursorClassName: "text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[6rem] relative bottom-2 md:bottom-3 lg:bottom-5 font-light"
            }} /></p>
          </div>
          <div id="bio" className=" flex-col font-medium text-lg lg:text-xl lg:mt-16  font-alb  mb-20 ">
            <p>I am a CSE Undergraduate at BIT,Mesra</p>
            <p>I am a web developer and a competitive programmer </p>


          </div>
          <div id="button">
            <button className=" scale-75 md:scale-100 md:hover:scale-105  hover:scale-90 rounded-2xl  shadow-2xl bg-purple-500 hover:bg-purple-600 cursor-pointer text-white px-8 py-5 mt-10 ease-in-out duration-200"><a href="#contact"> Let's Talk  <SendIcon className=" -rotate-[20deg] ml-2 mb-2" /></a></button>
            <button className="scale-75 md:scale-100  md:ml-10 md:hover:scale-105 hover:scale-90 rounded-2xl  shadow-2xl hover:bg-[#111827] dark:hover:bg-slate-100 dark:bg-white bg-[#111827]/80 text-white cursor-pointer dark:text-black px-8 py-5 mt-1 md:mt-10 ease-in-out duration-200">Portfolio <CallMadeIcon className=" rotate-[20deg] ml-2 mb-2" /></button>
            <div className="flex mt-12 space-x-3 md:space-x-10 mb-20">
              <div className="text-lg font-semibold mt-[18px]">Checkout my</div>
              <button className=" rounded-full  text-black bg-slate-200 h-16 w-16 hover:scale-110 hover:bg-slate-300  ease-in-out duration-200">
                <a href="https://www.instagram.com/kumarshivam_09/"><InstagramIcon id="insta" className=" scale-100 md:scale-125   lg:scale-150 text-2xl" /></a>
              </button>

              <button className="rounded-full  text-black bg-slate-200 h-16 w-16 hover:scale-110 hover:bg-slate-300   ease-in-out duration-200">
                <a href="https://github.com/legendary0911"><GitHubIcon id="git" className="scale-100 md:scale-125  lg:scale-150 " /></a>
              </button>

              <div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex mb-10 space-x-6   ">
          <div className="right mx-auto  ">
            <img loading="lazy" className='mt-10 lg:mt-10 pb-10 pr-10 duration-300 scale-110 mx-auto h-[80%] md:h-[90%] lg:h-[100%]' src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg"></img>
          </div>
          <div className="lg:block hidden">
            <div className="border-l-[2.5px] dark:border-white/50 border-black/50 h-[60%] mt-10"></div>
            <div className="-rotate-90 relative right-[43px] -bottom-20 ">Scroll Down</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Intro;

