import "../App.css";
import React, { useEffect } from 'react';
import { SiMongodb, SiFirebase, SiPython, SiCplusplus, SiReact, SiExpress, SiJava, SiJavascript, SiTailwindcss, SiCss3 } from 'react-icons/si';
import { ImHtmlFive } from 'react-icons/im';
import { GrNode } from 'react-icons/gr';
import ReactDOM from 'react-dom/client';





function Fields() {


    return (
        <div id="skill" className="h-fit lg:h-[46rem] pt-2 lg:pt-28  text-black bg-slate-100 dark:bg-yellow-500 lg:flex">

            <div className="left w-[90%] lg:w-fit text-black flex-col pl-[6%]">
                <div className="w-fit mx-auto lg:mx-0 text-center lg:text-start text-black flex-col mt-28 text-5xl lg:text-7xl font-alb space-y-3 pt-[15%]">
                    <p className="text-black ">My Area Of</p>
                    <p>Expertise</p>
                </div>
                <div className="w-fit mx-auto lg:mx-0 text-center lg:text-start flex-col lg:text-2xl text-xl mt-8 font-normal font-alb space-y-1 md:space-y-4  lg:pb-96">
                    <p className="">These are the area in  </p>
                    <p>which i have expertise and experience </p>
                </div>
                <div>
                </div>
            </div>
            <div className="right mx-auto w-fit pb-20 lg:pb-0 mt-20">
                <div className="flex  space-x-16  lg:space-x-28 mb-6 lg:mb-12 text-6xl  lg:text-7xl " data-aos="fade-right" ><ImHtmlFive className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /> <SiCss3 className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><SiTailwindcss className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /></div>
                <div className="flex  space-x-16 lg:space-x-28 mb-6 lg:mb-12 text-6xl  lg:text-7xl" data-aos="fade-right"   ><SiJavascript className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><SiExpress className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><GrNode className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /></div>
                <div className="flex  space-x-16 lg:space-x-28 mb-6 lg:mb-12 text-6xl  lg:text-7xl" data-aos="fade-right"  ><SiMongodb className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><SiFirebase className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><SiReact className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /></div>
                <div className="flex space-x-16  lg:space-x-28  text-6xl  lg:text-7xl" data-aos="fade-right"   ><SiCplusplus className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><SiJava className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /><SiPython className="hover:scale-[1.35] hover:ease-out duration-[300ms] hover:text-black/[0.6] " /></div>

            </div>
        </div>
    )
} 

export default Fields;

