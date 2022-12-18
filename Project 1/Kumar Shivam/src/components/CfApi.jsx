import "../App.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SiCodeforces } from 'react-icons/si'; SiCodeforces



function CF() {


    const [cf, setcf] = useState([]);


    useEffect(() => {
        fetch(` https://codeforces.com/api/user.info?handles=legendary09`)

            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(({ result: info }) => {
                const Data = info;
                setcf(Data)
            })
            .catch((err) => {
                console.log(err.message);
            });


    }, [])
    console.log(cf)
    return (

        <div id="cf" className="pt-20 bg-yellow-500 dark:bg-[#111827]">
            <div className=" text-center justify-center mx-auto mb-20 md:flex cf-image-div ">
                <SiCodeforces className="scale-[3] mx-auto hidden md:block sm:scale-[4] md:scale-[5] lg:scale-[6] dark:text-slate-200 mt-8 ml-1 md:mr-[2%]" />
                <p className=" md:ml-10 mt-3 font-[600] dark:text-slate-200 tracking-normal md:tracking-wider text-5xl md:text-6xl lg:text-7xl font-alb">Codeforces Stats</p>
            </div>


            <div className="mx-auto hover:scale-105 duration-200  dark:text-white cf-info-div w-[90%] md:w-[75%] lg:w-[60%] mb-28">
                <div data-aos="zoom-in-up" data-aos-duration="600" className="mx-auto bg-[#111827] text-white justify-center lg:flex shadow-xl hover:shadow-black/80 hover:shadow-2xl shadow-black/60 info-card  rounded-2xl first:dark:bg-[#1f2937] pt-10 pb-10 ">
                    <div className="profile-img-div">
                        <img className="mx-auto lg:ml-6 h-[20rem] sm:h-[22rem] md:h-[26rem] rounded-lg" src={cf[0]?.titlePhoto}></img>
                    </div>
                    <div className="info-div items-center">

                        <ul className=" mx-auto lg:ml-8 mt-10 lg:mt-0 pr-6 w-fit lg:pr-10">
                            <li className="font-title text-6xl lg:text-7xl bg-gradient-to-r text-transparent bg-clip-text from-white via-slate-300 to-slate-800 mb-2">{cf[0]?.handle}</li>
                            <li className=" text-xl sm:text-2xl font-alb mb-10" >{cf[0]?.rank}</li>
                            <li className=" text-lg sm:text-xl mb-4">friends of :    <span className="ml-2 text-blue-500  text-xl ">{cf[0]?.friendOfCount}</span></li>
                            <li className=" text-lg sm:text-xl mb-4">current rank :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.rank}</span></li>
                            <li className=" text-lg sm:text-xl mb-4">current rating :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.rating}</span></li>
                            <li className=" text-lg sm:text-xl mb-4">max rank :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.maxRank}</span></li>
                            <li className=" text-lg sm:text-xl mb-16">max rating :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.maxRating}</span></li>

                        </ul>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default CF;
