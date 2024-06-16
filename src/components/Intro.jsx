import React from 'react'
import '../App.css'
import alumni_discount from '../assets/alumni_discount.svg'
import down_arrow from '../assets/arrow-double-down.svg'
import video from '../assets/hotstar-8s-promo.mp4'

export const Intro = () => {
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
                        <div className='w-[100%] rounded-lg my-9'>
                            <video controls width="100%" className='rounded-xl'> {/*Edit the video player accordingly. Play pause buttons, gif in cover. */}
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
