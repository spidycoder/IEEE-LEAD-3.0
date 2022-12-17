/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';


function MovieResultCard(props) {
   

    return (
        <div className=''>

            <div className=" job-post-div h-fit rounded-md  bg-white  " >
                <img src={props.img} alt="" className=" h-100 w-full rounded-t-md mr-6" />
                <div className=' font-semibold details rounded-md backdrop-blur-md bg-white/50 mx-3 px-2 py-2 relative bottom-[3.5rem] '>
                
                    <div className='date text-sm font-medium flex'>

                        <div> {props.year}</div>
                        <div>
                            <div className=''>
                                <img src="data:image/png;base64,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" className='h-5 w-10 absolute right-10 top-8.5'>
                                </img>
                                <div className="text-sm absolute right-2  ">{props.rating}</div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="heading pl-2 flex ">

                    <div className="flex flex-col mr-[10%]">

                    <div className="mb-2 text-lg font-semibold  cursor-pointer w-fit">
                        {props.title}
                    </div>
                        <h3 className="text-xs w-fit">
                            {props.description}
                        </h3>

                    </div>

                </div>
                <div className="tag mt-6 mb-3 mx-1">

                </div>
                <div className="foot flex relative mt-10 mb-5 bottom-4">



                </div>
            </div>
        </div>
    )
};

export default MovieResultCard;
