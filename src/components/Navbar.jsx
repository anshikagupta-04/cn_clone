import React from 'react'
import cnLogo from '../assets/cn_logo.svg'
import arrow from '../assets/arrow-top-right.svg'

function Navbar() {
  return (
    <div className=' sticky flex justify-between top-0 z-20 w-full bg-[#FFFFFF] py-0 px-72'>
        <div className='grid grid-flow-col text-sm font-semibold'>
            <div className='h-[100%] pr-9 py-5'>
                <img src={cnLogo} style={{height:'24px'}}/>
            </div>
            <div className='px-6 py-5'>
                <p>Job Bootcamp</p>
            </div>
            <div className='px-6'>
                <div className=' pt-5'>
                    <p>Upskilling courses</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-[9.5px] pb-1'>Upto 100% scholarship</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='border-[1px] border-black py-1 px-4 rounded-md'>
                <span className='flex justify-center items-center font-semibold text-sm'>
                    My Classroom
                    <div className=' m-[6px]'>
                        <img src={arrow}/>
                    </div>
                </span>
            </button>
        </div>
    </div>
  )
}

export default Navbar