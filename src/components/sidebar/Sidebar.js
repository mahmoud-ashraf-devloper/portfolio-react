import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { AiOutlineHome } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { MdMessage } from 'react-icons/md';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { RiProjector2Fill } from 'react-icons/ri'

const Sidebar = () => {
    return (
        <div className='fade-in-1 bg-indigo-400/30 text-indigo-400 w-full h-full'>
            <div className='py-8 flex flex-col justify-between items-center h-full'>
                <Link to="/">
                    <div className=' '>
                        <img className='px-2' src={Logo} alt="" />
                    </div>
                </Link>
                <div className='flex flex-col space-y-6 w-full items-center justify-center'>
                    <NavLink exact="true" activeclassname="active" className='group cursor-pointer w-full flex justify-center relative' to="/">
                        <span className='transition duration-500 ease-in-out md:text-xl text-sm font-bold opacity-0 group-hover:md:opacity-100 opacity-17 absolute w-full h-full flex justify-center items-center'>Home</span>
                        <AiOutlineHome className='transition duration-500 ease-in-out md:w-10 w-7 md:h-10 h-7 group-hover:opacity-0' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className='group cursor-pointer w-full flex justify-center relative' to="/about">
                        <span className='transition duration-500 ease-in-out md:text-xl text-sm font-bold opacity-0 group-hover:md:opacity-100 opacity-17 absolute w-full h-full flex justify-center items-center'>About</span>
                        <SiAboutdotme className='transition duration-500 ease-in-out md:w-10 w-7 md:h-10 h-7  group-hover:opacity-0' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className='group cursor-pointer w-full flex justify-center relative' to="/contact">
                        <span className='transition duration-500 ease-in-out md:text-xl text-sm font-bold opacity-0 group-hover:md:opacity-100 opacity-17 absolute w-full h-full flex justify-center items-center'>Contact</span>
                        <MdMessage className='transition duration-500 ease-in-out md:w-10 w-7 md:h-10 h-7 group-hover:opacity-0' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className='group cursor-pointer w-full flex justify-center relative' to="/projects">
                        <span className='transition duration-500 ease-in-out md:text-xl text-sm font-bold opacity-0 group-hover:md:opacity-100 opacity-17 absolute w-full h-full flex justify-center items-center'>Projects</span>
                        <RiProjector2Fill className='transition duration-500 ease-in-out md:w-10 w-7 md:h-10 h-7 group-hover:opacity-0' />
                    </NavLink>
                </div>
                <div className='flex flex-col'>
                    <div className='rounded-full  p-3 cursor-pointer hover:md:scale-110 scale-17 duration-500'>
                        <a target='_blank' href="https://www.linkedin.com/in/mahmoud-ashraf-49921b1a8/" rel='noreferrer'><FaLinkedinIn className='md:w-10 w-7 md:h-10 h-7 hover:text-indigo-500' /></a>
                    </div>
                    <div className='rounded-full  p-3 cursor-pointer hover:md:scale-110 scale-17 duration-500'>
                        <a target='_blank' href="https://github.com/mahmoud-ashraf-devloper" rel='noreferrer'><FaGithub className='md:w-10 w-7 md:h-10 h-7 hover:text-indigo-500' /></a>
                    </div>

                    <div className='rounded-full  p-3 cursor-pointer hover:md:scale-110 scale-17 duration-500'>
                        <a target='_blank' href="https://www.facebook.com/mhmoud.ashraf.9674/" rel='noreferrer'><FaFacebook className='md:w-10 w-7 md:h-10 h-7 hover:text-indigo-500' /></a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Sidebar;
