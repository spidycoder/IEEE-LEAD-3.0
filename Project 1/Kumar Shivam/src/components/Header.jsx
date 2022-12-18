import "../App.css";
import React, { useEffect, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { MdToggleOff, MdToggleOn, MdDarkMode, MdLightMode } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';


function Header() {
    const [ham_menu, set_menu] = useState(false);
    const [theme, setTheme] = useState("dark");








    function themeChange() {
        if (theme == "dark") {
            setTheme("light")
            document.getElementById('html').className = " scroll-smooth ";

        }
        else {
            setTheme("dark")
            document.getElementById('html').className = "dark scroll-smooth ";
        }
    }


    function toggle(word) {
        const arr = ["About", "Skills", "CF Rating", "Projects", "Contact Me"]
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
    function toggleham(word) {
        const arr = ["About2", "Skills2", "CF Rating2", "Projects2", "Contact Me2"]
        arr.map((res) => {

            if (res == word + "2") {

                document.getElementById(`${res}`).className = "text-end pr-12  font-medium text-lg text-blue-500 cursor-pointer border-b-4 pb-2 border-blue-400 "


            }
            else {
                document.getElementById(`${res}`).className = "text-end pr-12 text-black font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] "

            }

        })
    }
    return (
        <div className="sticky top-0 z-10 bg-yellow-500  dark:bg-[#111827] dark:text-slate-300 ">
            <div id="nav" className="  flex ">

                <div className=" text-lg md:text-xl lg:text-2xl font-[620] pl-[7%] pt-4">
                    <ul id="animate" className="space-y-1">
                        <li className="">Kumar</li>
                        <li className="dark:text-yellow-500 text-red-600 pb-4">Shivam </li>
                    </ul>
                </div>
                <div className="flex absolute right-[7%] pt-8">
                    <ul id="full_navbar" className="hidden md:flex justify-end space-x-8 lg:space-x-16">

                        <li id="About" onClick={(event) => toggle(event.target.innerText)} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]  "><a id="link" href="#about">About</a></li>
                        <li id="Skills" onClick={(event) => toggle(event.target.innerText)} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#skill">Skills</a></li>
                        <li id="CF Rating" onClick={(event) => toggle(event.target.innerText)} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#cf">CF Rating</a> </li>
                        <li id="Projects" onClick={(event) => toggle(event.target.innerText)} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#project">Projects </a></li>
                        <li id="Contact Me" onClick={(event) => toggle(event.target.innerText)} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#contact">Contact Me</a> </li>

                    </ul>
                    <div className="ml-16 space-x-2 flex font-medium text-lg" onClick={() => themeChange()}>{theme == "light" ? <MdToggleOff className="scale-[1.8] mt-1" /> : <MdToggleOn className="scale-[1.8] mt-1" />}{theme == "light" ? <MdLightMode className="scale-110 mt-1" /> : <MdDarkMode className=" mt-1" />}</div>
                    <div className=" cursor-pointer block mr-20 pb-10 absolute right-[3%] md:hidden" onClick={() => {
                        if (ham_menu === true) {
                            document.getElementById('mobile_menu').className = "absolute right-0 top-[80px] md:hidden bg-white h-fit w-full hidden space-y-4";
                            set_menu(false);
                        }
                        else {
                            document.getElementById('mobile_menu').className = "absolute right-0 top-[80px] md:hidden bg-white h-fit w-full space-y-4";
                            set_menu(true);
                        }



                    }}>{ham_menu === true ? <CloseIcon className=" scale-110 rotate " /> : <MenuIcon className=" ease-out duration-200 scale-110" />}</div>




                </div>

            </div>
            <div className="-mt-6">
                <ul id="mobile_menu" className="absolute  right-0 top-23.5 md:hidden items-end bg-red-400 h-fit w-full hidden space-y-4">
                    <li id="About2" onClick={(event) => toggleham(event.target.innerText)} className="text-black text-end pr-12  font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]  "><a id="link" href="#about">About</a></li>
                    <li id="Skills2" onClick={(event) => toggleham(event.target.innerText)} className=" text-black text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#skill">Skills</a></li>
                    <li id="CF Rating2" onClick={(event) => toggleham(event.target.innerText)} className=" text-black text-end pr-12  font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] "><a id="link" href="#cf">CF Rating</a> </li>
                    <li id="Projects2" onClick={(event) => toggleham(event.target.innerText)} className="  text-black text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#project">Projects </a></li>
                    <li id="Contact Me2" onClick={(event) => toggleham(event.target.innerText)} className=" text-black text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4  pb-6 hover:border-blue-400 ease-in-out duration-[200ms]"><a id="link" href="#contact">Contact Me</a> </li>

                </ul>
            </div>
        </div>
    )
};

export default Header;

