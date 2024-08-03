import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import { useInView } from "framer-motion"
import boot_triangle from "../assets/bootcampicon-triangle.svg";
import fullstack from "../assets/fullstack-32956.png";
import data_analytics from "../assets/data-analytics-33356.webp";
import upskill from "../assets/upskill-courses.png";
import bg from "../assets/bg-graphics-32607(1).webp";
import shimmer from "../assets/shimmer.webp";
import shine from "../assets/shine.png";
import mern from "../assets/mern.png";
import ai from "../assets/ai.svg";
import badge from "../assets/badge-fill.svg";
import dsa from "../assets/skills-dsa.svg"

const Courses = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const myRef = useRef(null);

  const isInView = useInView(myRef, { margin: "0px 0px -100px 0px" }, { once: false })

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView)
  // }, [isInView])

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position - 1100);
    // console.log(scrollPosition);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   console.log(scrollPosition);
  // }, [scrollPosition]);

  const jobBootcamp = [
    {
      img: fullstack,
      name: 'Full Stack Web Development',
      hrs: '140+',
      problems: '300+',
      learners: '10k+'
    },
    {
      img: data_analytics,
      name: 'Data Analytics',
      hrs: '50+',
      problems: '300+',
      learners: '1000+'
    }
  ]

  const bootcampList = jobBootcamp.map(
    (item) =>
      <div className='h-[200px] w-[440px] rounded-xl shadow-xl shadow-[#EFEFEF] hover:shadow-xl'>
        <div className='flex items-center bg-[#F5F7FE] py-3 rounded-t-xl'>
          <img src={item.img} alt="" className=' size-20 bg-white rounded-full p-4 m-5' />
          <p className='text-lg font-bold'>{item.name}</p>
        </div>
        <div className='flex justify-between items-center p-4 text-sm'>
          <p>{item.hrs} Hrs of content</p>
          <p>{item.problems} Problems</p>
          <p>{item.learners} Learners</p>
        </div>
      </div>
  )

  const skillslist = [
    {
      id: 1,
      img: mern,
      name: 'MERN Stack',
    },
    {
      id: 2,
      img: ai,
      name: 'AI',
    },
    {
      id: 3,
      img: dsa,
      name: 'DSA',
    },
    {
      id: 4,
      img: badge,
      name: 'Soft skills',
    }
  ]

  const skills = skillslist.map(
    (skill) =>
      <div className='flex justify-between items-center gap-3 bg-[#F5F7FE] rounded-lg px-2 py-2'>
        <img src={skill.img} alt="" className='size-6' />
        <p className='text-[20px] font-bold'>{skill.name}</p>
      </div>
  )

  return (
    <div>
      <div className=' h-auto w-full px-72 relative ' ref={myRef}>
        <div className='w-full h-[83%] border-l-2 border-dotted border-[#C3C3C3]'>
          <div className=' text-[100px] font-[1000] py-16 text-[#e3e3e3] leading-[100px] text-center'>
            OUR OFFERINGS
          </div>
          <div className='absolute left-[235px] top-[205px] z-10'>
            <img src={boot_triangle} alt="" />
          </div>
          <div className='flex pl-5'>
            <div className='px-4 h-8 flex items-center text-lg font-bold'>Job Bootcamp</div>
            <div className='px-4 h-8 flex items-center text-sm font-bold bg-[#E3F3FF] rounded-r-3xl'>For professionals</div>
          </div>
          <div className='flex w-full pl-9 py-9 flex-wrap gap-5 '>
            {bootcampList}
          </div>
          <div className='absolute bg-white left-[265px] top-[570px] flex items-center justify-center w-12 h-12 z-10 rounded-base shadow-xl shadow-[#EFEFEF]'>
            <img src={upskill} alt="" className='size-6' />
          </div>
          <div className='flex pl-5 my-12'>
            <div className='px-4 h-8 flex items-center text-lg font-bold'>TechVarsity</div>
            <div className='px-4 h-8 flex items-center text-sm font-bold bg-[#E3F3FF] rounded-r-3xl'>For college students</div>
          </div>
          <div
            className={`w-[1.5px] bg-black absolute top-0 left-[287.5px] max-h-[65%] ${isInView ? '' : 'h-0'}`}
            style={{ height: isInView ? `${scrollPosition}px` : '0px' }}
          ></div>
        </div>
        <div className=' w-full h-full flex justify-end pr-2'>
          <div className='w-[95%] h-full rounded-xl shadow-[0px_20px_60px_5px_rgba(0,0,0,0.08)]'>
            <div className=' relative w-full h-full '>
              <div className='flex justify-between py-12 px-4'>
                <div className=' w-[70px] h-7 bg-[#5780E9] rounded-r-full px-3 flex justify-between items-center absolute top-2 left-0'>
                  <div className='w-[70px] h-7 absolute animate-[slide_1s_linear_infinite]' style={{ backgroundImage: `url(${shimmer})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
                  <p className='text-white font-bold text-xs'>New</p>
                  <img src={shine} alt="" className=' size-3' />
                </div>
                <div className='flex gap-3 flex-col'>
                  <h1 className='font-extrabold text-xl'>Coding Ninjas TechVarsity</h1>
                  <p className='text-md'>Complete CS Education to transform you into a 10X Developer</p>
                </div>
                <div className='w-[31.5%] h-auto flex flex-wrap justify-between gap-x-7 gap-y-5'>
                  {skills}
                </div>
              </div>
              <div className='w-full border-t'>
                <div className='w-[57%] p-5 flex justify-between'>
                  <p>500+ hrs of content</p>
                  <p>2500+ questions</p>
                  <p>40+ projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-end'>
        <img src={bg} alt="" />
      </div>
    </div>
  )
}

export default Courses