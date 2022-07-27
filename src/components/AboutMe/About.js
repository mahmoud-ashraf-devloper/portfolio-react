import React, { useState, useEffect} from 'react';
import { TiChevronRight } from 'react-icons/ti';
import AnimateLetters from './../AnimateLetters/AnimateLetters';
import './style.scss';

// cuble icons
import { GrReactjs } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';

const About = () => {

    const data = {
        title: 'About Me',
        first: 'I am very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.',
        second: 'I am quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.',
        third: 'If I need to define myself in one sentence that would be a family person, Sports Lover, and tech-obsessed!'
    }

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-8 pr-10'>
            <div className='col-span-4 fade-in-2 about-font text-white flex flex-col relative z-20'>
                <div className='flex items-end space-x-6'>
                    <span className='codes text-indigo-500'>&lt;h1&gt;</span>
                    <h1 className='md:text-7xl text-6xl tracking-wider font-medium'>
                        <AnimateLetters letterClass={letterClass} strArr={data.title.split('')} index={15} />
                    </h1>
                    <span className='codes text-indigo-500'>&lt;/h1&gt;</span>
                </div>
                <div className='flex  space-y-10 flex-col md:text-3xl tracking-wide text-3xl pt-10 px-4'>
                    <p className='flex fade-in-1'>
                        <span className='mr-3 text-indigo-400'>
                            <TiChevronRight />
                        </span>
                        {data.first}
                    </p>
                    <p className='flex fade-in-2'>
                        <span className='mr-3 text-indigo-400'>
                            <TiChevronRight />
                        </span>
                        {data.second}
                    </p>
                    <p className='flex fade-in-3'>
                        <span className='mr-3 text-indigo-400'>
                            <TiChevronRight />
                        </span>
                        {data.third}
                    </p>
                </div>
            </div>
            <div className='cube-container col-span-4 md:relative md:flex md:justify-center md:pt-20 md:-bottom-0 hidden '>

                <div className='box'>
                    <div className="card" id="front">
                        <div className='w-44'>
                            <GrReactjs className='w-full h-full text-[#5ED4F4] mb-3' />
                        </div>
                        front
                    </div>
                    <div className="card" id="back">
                        <div className='w-44'>
                            <TbBrandNextjs className='w-full h-full text-black mt-3' />
                        </div>
                        back
                    </div>
                    <div className="card" id="left">
                        <div className='w-44'>
                            <IoLogoJavascript className='w-full h-full text-[#EFD81D] mt-3' />
                        </div>
                        left
                    </div>
                    <div className="card" id="right">
                        <div className='w-44'>
                            <AiFillHtml5 className='w-full h-full text-[#ee4744] mt-3' />
                        </div>
                        right
                    </div>
                    <div className="card" id="top">
                        <div className='w-44'>
                            <DiCss3 className='w-full h-full text-[#3453ef] mt-3' />
                        </div>
                        top
                    </div>
                    <div className="card" id="bottom">
                        <div className='w-44'>
                            <SiTailwindcss className='w-full h-full text-cyan-300 mt-3' />
                        </div>
                        bottom
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
