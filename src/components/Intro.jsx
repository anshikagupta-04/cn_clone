import React, { useState } from 'react'
import '../App.css'
import alumni_discount from '../assets/alumni_discount.svg'
import down_arrow from '../assets/arrow-double-down.svg'
import video from '../assets/hotstar-8s-promo.mp4'
import Video from './Video.jsx';
import play from '../assets/play-button.svg'
import fullVideo from '../assets/hotstar-promo-full.mp4'

export const Intro = () => {
    // const videoRef = useRef(null)

    const [ flag, setflag ] = useState(false);

    const changeFlag = () => {
        setflag(true);
        console.log(flag);
    }

    // const playVideo = (() => {
    //     if (flag) {
    //         <video controls width="100%" className='rounded-xl'>
    //             <source src={fullVideo} type="video/mp4" />
    //             Your browser does not support the video tag.
    //         </video>
    //     }
    //     else{
    //         <Video src={video} type='video/mp4' />
    //     }
    // })

    return (
        <div className='main'>
            <div className="main-wraper z-0 relative">
                <div className='absolute top-0 left-0 w-full h-full px-72 flex-row justify-center items-center z-10'>
                    <div className='flex justify-center items-center my-[60px]'>
                        <img src={alumni_discount} />
                    </div>
                    <div className=' flex flex-col justify-center items-center w-full py-12'>
                        <p className='text-2xl text-blue-700 font-semibold text-center'>Restricted by opportunities?</p>
                        <p className='text-7xl h-52 w-full leading-snug font-black text-white text-center px-24 font-sans'>Get the tech career you deserve. Faster.</p>
                        <div className=' text-zinc-500 font-medium text-center'>Structured coding courses that get you there faster with confidence.</div>
                        <button className=' w-[250px] h-16 bg-[#F66C3B] my-16 rounded-xl flex justify-center gap-3 items-center text-lg text-neutral-50 font-bold'>
                            Explore Courses
                            <img src={down_arrow} />
                        </button>
                        <div className='w-[100%] h-auto rounded-lg my-9 relative'>
                            {flag ? (<video controls width="100%" className='rounded-xl' autoPlay>
                                <source src={fullVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>) : (
                                <Video src={video} type='video/mp4' />
                            )}
                            <div className=' w-20 h-20 absolute left-[45%] top-[45%] bg-[#ffffff71] rounded-full flex justify-center items-center' onClick={changeFlag} style={{width : flag? '0' : ''}}>
                                <img src={play} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
