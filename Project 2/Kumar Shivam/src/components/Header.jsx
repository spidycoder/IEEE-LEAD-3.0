import "../App.css";
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Hidden } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";


function Header(props) {
    const [ham_menu, set_menu] = useState(false);
    function hii() {
        console.log("dont click me")
    }

    return (
        <div className={props.topclass}>
            <div className="  flex ">

                <div className=" text-2xl font-[620] pl-[7%] pt-8">
                    <ul className="space-y-1">
                        <li className="pb-8 pt-2" onClick={props.on1}><Link to='/' state={{ status: "trending" }}>BingeWatchers</Link></li>

                    </ul>
                </div>
                <div className=" absolute right-[7%] pt-12">
                    <div id="full_navbar" className="hidden md:flex justify-end space-x-8 lg:space-x-16">

                  <div onClick={hii()}><Link id ="Trending" to='/' state={{ status: "trending" }} onClick={props.on1} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] focus:text-blue-500 focus:border-b-4 focus:border-blue-400" >Trending</Link></div>      
                        <Link to='/' id ="Latest" state={{ status: "latest" }} onClick={props.on2} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] focus:text-blue-500 focus:border-b-4 focus:border-blue-400">Latest</Link>
                        <Link to='/' id ="Popular" state={{ status: "popular" }} onClick={props.on3} className="font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] focus:text-blue-500 focus:border-b-4 focus:border-blue-400">Popular </Link>

                    </div>
                    <div className=" cursor-pointer block pb-10 absolute right-[3%] md:hidden" onClick={() => {
                        if (ham_menu === true) {
                            document.getElementById('mobile_menu').className = "absolute right-0 top-24 md:hidden bg-white h-fit w-full hidden space-y-4";
                            set_menu(false);
                        }
                        else {
                            document.getElementById('mobile_menu').className = "absolute right-0 top-24 md:hidden bg-white h-fit w-full space-y-4";
                            set_menu(true);
                        }



                    }}>{ham_menu === true ? <CloseIcon className=" scale-110 rotate " /> : <MenuIcon className=" ease-out duration-200 scale-110" />}</div>




                </div>

            </div>
            <div className="text-black ">
                <ul id="mobile_menu" className=" absolute right-0 top-24 md:hidden items-end  bg-white h-fit w-full hidden space-y-4">
                    <li id="Trending2" className=" text-end pr-12  font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] mt-4 "><Link to='/' onClick={props.on1} >Trending</Link></li>
                    <li id="Latest2" className=" text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms]"><Link to='/' onClick={props.on2} >Latest</Link></li>
                    <li id="Popular2" className="  text-end pr-12 font-medium text-lg hover:text-blue-500 cursor-pointer hover:border-b-4 pb-2 hover:border-blue-400 ease-in-out duration-[200ms] pb-4"><Link to='/' onClick={props.on3} >Popular </Link></li>


                </ul>
            </div>
        </div>
    )
};

export default Header;

