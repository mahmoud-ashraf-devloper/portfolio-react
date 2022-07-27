import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import AnimateLetters from './../AnimateLetters/AnimateLetters';

const Home = () => {
    const data = {
        name: 'hmoud Ashraf',
        secondSentence: 'Lets Build Something Awesome Together. Harry Up'
    }

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, []);

    return (
            <div className='fade-in-2 w-full home-font  h-full md:pl-14 pl-2 text-white font-medium pr-32'>
                <div className='md:text-7xl text-4xl tracking-wider '>
                    <div className='py-8'>
                        <span className='text-3xl text-indigo-500 codes'>&lt;h1&gt;</span>
                        <h1 className='leading-snug'>Hi,</h1>
                        <span className='flex leading-snug '>I am <img className='md:ml-6 md:mr-4 w-20  h-20 logo-animation' src={Logo} alt="" />
                            <AnimateLetters letterClass={letterClass} strArr={data.name.split('')} index={15} />
                        </span>
                        <span className='text-3xl text-indigo-500 codes'>&lt;/h1&gt;</span>
                    </div>
                    <p className='pt-6 leading-snug '>
                        <AnimateLetters letterClass={letterClass} strArr={data.secondSentence.split('')} index={27} />
                    </p>
                    <div className='py-10 text-2xl text-indigo-900'>
                        <span className='leading-snug text-indigo-500'>Full-Stack Developer</span>
                    </div>
                </div>

                <button className='fade-in-3 mt-8 block px-8 py-4 rounded-md tracking-wider from-indigo-500 to-purple-800 text-white bg-gradient-to-bl hover:bg-gradient-to-br hover:text-white/80 transition duration-300 ease-in'>CONTACT ME</button>
            </div>

    );
}

export default Home;
