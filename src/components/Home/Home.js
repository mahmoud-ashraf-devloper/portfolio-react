import React, { useState, useEffect } from 'react';
import AnimateLetters from './../AnimateLetters/AnimateLetters';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const data = {
        name: 'hmoud',
        secondSentence: 'Lets Build Something Awesome Together. Harry Up'
    }

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, []);

    return (
        <div className='fade-in-2 home-font text-white md:pl-8 pl-3 min-h-[75vh] flex items-center '>

            <div className=''>
                <div className='md:text-5xl text-xl tracking-wider '>
                    <div className='py-2 flex flex-col'>
                        <div className='md:flex  items-end my-6'>
                            <span className='text-sm block text-indigo-500 codes'>&lt;h1&gt;</span>
                            <span className='text-violet-200'>
                                <span>Hi, I'm M</span>
                                <AnimateLetters letterClass={letterClass} strArr={data.name.split('')} index={15} />
                            </span>
                            <span className='text-sm text-indigo-500 codes'>&lt;/h1&gt;</span>
                        </div>
                    </div>
                    <p className='pt-2 leading-snug w-100 break-normal'>
                        <AnimateLetters letterClass={letterClass} strArr={data.secondSentence.split('')} index={20} />
                    </p>
                    <div className='py-4 md:text-2xl text-xl text-indigo-900'>
                        <span className='leading-snug text-indigo-500'>Full-Stack Developer</span>
                    </div>
                </div>
                <NavLink exact="true" activeclassname="active" className='cursor-pointer' to="/contact">
                    <button className='md:w-1/4 md:text-2xl fade-in-3 mt-8 flex justify-center  whitespace-nowrap px-8 py-2 rounded-md tracking-wider from-indigo-500 to-purple-800 text-white bg-gradient-to-bl hover:bg-gradient-to-br hover:text-white/80 transition duration-300 ease-in'>CONTACT ME</button>
                </NavLink>
            </div>
        </div>

    );
}

export default Home;
