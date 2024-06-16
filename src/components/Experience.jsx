import { useInView } from 'framer-motion';
import '../App.css';
import { useEffect, useRef } from 'react';
import { Learner } from '../assets/learner.svg';

export const Experience = () => {

  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)

  const myRef = [myRef1, myRef2, myRef3]

  const isInView = myRef.map((item) => useInView(item, { margin: "0px 0px -300px 0px" }, { once: false }))

  useEffect(() => {
    console.log(isInView);
  }, [isInView])

  return (
    <div className='experience '>
      <div className='px-72 py-14 z-10 flex flex-col items-center text-center'>
        <div className='text-[#2D2D2D] font-bold text-6xl font-sans leading-snug p-16'>
          <h1 className={`font-sans transition-transform ease-in ${isInView[0] ? 'scale-125' : ''} `} ref={myRef1} style={{ color: isInView[0] ? 'white' : '' }}>8 years of</h1>
          <h1 className={`font-sans transition-transform ease-in ${isInView[1] ? 'scale-125' : ''} `} ref={myRef2} style={{ color: isInView[1] ? 'white' : '' }}>transforming</h1>
          <h1 className={`font-sans transition-transform ease-in ${isInView[2] ? 'scale-125' : ''} `} ref={myRef3} style={{ color: isInView[2] ? 'white' : '' }}>tech careers</h1>
        </div>
        <div className='p-28'>
          <div className='bg-[#1F1F1F] h-16 w-16 flex justify-center items-center'>
          {/* <svg>
        <use xlinkHref={learner} />
      </svg> */}
      <Learner className='fill-[#4C4C4C]'/>
            {/* <img src={learner} alt="" className=' size-10 filter-[#4C4C4C]' /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
