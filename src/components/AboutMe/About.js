import React, { useState, useEffect } from 'react';
import { TiChevronRight } from 'react-icons/ti';
import AnimateLetters from './../AnimateLetters/AnimateLetters';
import './style.scss';

import Cube from './../Cube/Cube';

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
        <div className='min-h-[70vh] max-w-[80vw] flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-8 '>
                <div className='col-span-4 fade-in-2 about-font text-white flex flex-col  z-20'>
                    <div className='flex items-end space-x-6 ml-8' >
                        <span className='codes text-indigo-500'>&lt;h1&gt;</span>
                        <h1 className='md:text-6xl text-2xl tracking-wider font-medium'>
                            <AnimateLetters letterClass={letterClass} strArr={data.title.split('')} index={15} />
                        </h1>
                        <span className='codes text-indigo-500'>&lt;/h1&gt;</span>
                    </div>
                    <div className='lg:ml-10 md:ml-4 flex md:space-y-10 space-y-5 flex-col md:text-xl tracking-wide text-sm  font-sans font-medium pt-10 px-4'>
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
                {/* cube */}
                <Cube />
            </div>
        </div>
    );
}

export default About;
