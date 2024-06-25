import { color, inView, useInView } from 'framer-motion';
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import learner from '../assets/learner.svg';
import placement from '../assets/placement-cell-fill.svg';
import avg_ctc from '../assets/average-ctc-fill.svg';
import hike from '../assets/hike.svg';
import whyus from '../assets/why-us2.svg'

export const Experience = () => {

  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [scrollPosition3, setScrollPosition3] = useState(0);

  const handleScroll1 = () => {
    const position = window.scrollY
    setScrollPosition1(position - 2950)
    console.log(position);
  }

  const handleScroll2 = () => {
    const position = window.scrollY
    setScrollPosition2(position - 3500)
    console.log(position);
  }

  const handleScroll3 = () => {
    const position = window.scrollY
    setScrollPosition3(position - 4000)
    console.log(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll1, { passive: 'true' });

    return () => {
      window.removeEventListener('scroll', handleScroll1)
    };
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll2, { passive: 'true' });

    return () => {
      window.removeEventListener('scroll', handleScroll2)
    };
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll3, { passive: 'true' });

    return () => {
      window.removeEventListener('scroll', handleScroll3)
    };
  }, [])

  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  const myRef4 = useRef(null)
  const myRef5 = useRef(null)
  const myRef6 = useRef(null)
  const myRef7 = useRef(null)

  const myRef = [myRef1, myRef2, myRef3, myRef4, myRef5, myRef6, myRef7]

  const isInView = myRef.map((item) => useInView(item, { margin: "0px 0px -300px 0px" }, { once: false }))

  const transforming_list = [
    {
      position: scrollPosition1,
      view: 4,
      ref: myRef5,
      color: '#65B168',
      img: placement,
      big_txt: '1,400 Alumni in MAANG',
      small_txt: '& more in 103/111 Unicorns'
    },
    {
      position: scrollPosition2,
      view: 5,
      ref: myRef6,
      color: '#EF6292',
      img: avg_ctc,
      big_txt: '1 Cr+ highest CTC',
      small_txt: 'after completing the course'
    },
    {
      position: scrollPosition3,
      view: 6,
      ref: myRef7,
      color: '#5780E9',
      img: hike,
      big_txt: '128% average hike',
      small_txt: 'via our placement cell'
    }
  ]

  const transforming_sec = transforming_list.map((data) =>
    <div className='flex flex-col items-center'>
      <div className='relative border-[#1F1F1F] border-dashed border-l-2 h-[210px]'>
        <div className={`absolute top-0 -left-[1px] border-[#3b3b3b] border-l-2 max-h-[220px] `} style={{ height: isInView ? `${data.position}px` : '0px' }}></div>
      </div>
      <div className={`text-center flex flex-col justify-center items-center mb-6 gap-8 ${isInView[data.view] ? 'pt-10' : 'mt-10'}`} ref={data.ref}>
        <div className={`bg-[${data.color}] h-[103px] w-[103px] rounded-3xl flex justify-center items-center ${isInView[data.view] ? '' : 'bg-[#1f1f1f]'}`}>
          <div className={`h-[103px] w-[103px] rounded-3xl absolute ${isInView[data.view] ? 'w-0 h-0' : 'bg-[#1f1f1fa8]'}`}></div>
          <img src={data.img} alt="" className=' size-10 ' />
        </div>
        <h1 className={`text-7xl font-extrabold transition-transform ease-in ${isInView[data.view] ? 'text-white scale-125' : 'text-[#2D2D2D]'}`}>{data.big_txt}</h1>
        <p className={`text-3xl ${isInView[data.view] ? 'text-[#838485]' : 'text-[#2D2D2D]'}`}>{data.small_txt}</p>
      </div>
    </div>
  )

  return (
    <div className='experience '>
      <div className='px-72 py-14 z-10 flex flex-col items-center text-center'>
        <div className='text-[#2D2D2D] font-bold text-6xl font-sans leading-snug p-16'>
          <h1 className={`font-sans transition-transform ease-in ${isInView[0] ? 'scale-125' : ''} `} ref={myRef1} style={{ color: isInView[0] ? 'white' : '' }}>8 years of</h1>
          <h1 className={`font-sans transition-transform ease-in ${isInView[1] ? 'scale-125' : ''} `} ref={myRef2} style={{ color: isInView[1] ? 'white' : '' }}>transforming</h1>
          <h1 className={`font-sans transition-transform ease-in ${isInView[2] ? 'scale-125' : ''} `} ref={myRef3} style={{ color: isInView[2] ? 'white' : '' }}>tech careers</h1>
        </div>
        <div className={`text-center flex flex-col justify-center items-center mb-6 gap-8 ${isInView[3] ? 'pt-32' : 'mt-32'}`} ref={myRef4}>
          <div className={`bg-[#6249C5] h-[103px] w-[103px] rounded-3xl flex justify-center items-center ${isInView[3] ? '' : 'bg-[#1f1f1f]'}`}>
            <div className={`h-[103px] w-[103px] rounded-3xl absolute ${isInView[3] ? 'w-0 h-0' : 'bg-[#1f1f1fa8]'}`}></div>
            <img src={learner} alt="" className=' size-10' />
          </div>
          <h1 className={`text-7xl font-extrabold transition-transform ease-in ${isInView[3] ? 'text-white scale-125' : 'text-[#2D2D2D]'}`}>1.5 Lac+ learners</h1>
          <p className={`text-3xl ${isInView[3] ? 'text-[#838485]' : 'text-[#2D2D2D]'}`}>cracked dream roles at top tech companies</p>
        </div>
        {transforming_sec}
        <img src={whyus} alt="" />
      </div>
    </div>
  )
}
