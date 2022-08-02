import React from 'react';

import Project from './Project';
import Slider from './../Slider/Slider';

import { GrReactjs } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import {AiOutlineEye} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';


const Projects = () => {
    const projects = [
        {
            id: 1,
            baseUrl: '/projects/demand-ecommerce/',
            title: 'Demand Ecommerce',
            description: 'A ecommerce website for demand',
            images: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                '7.png',
                '8.png',
                '9.png',
            ],
            links: {
                liveDemo: 'https://deman-eccomerce-mahmoud.netlify.app/',
                github: 'https://github.com/mahmoud-ashraf-devloper/demand-ecommerce-template'
            }

        },
        {
            id: 2,
            baseUrl: '/projects/food-delavery/',
            title: 'Food Delivery App',
            description: 'A food delivery app',
            images: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                '7.png',
                '8.png',
                '9.png',
            ],
            links: {
                liveDemo: 'https://food-ecommerce.herokuapp.com/',
                github: 'https://github.com/mahmoud-ashraf-devloper/food_delivery_app'
            }
        },
        {
            id: 3,
            baseUrl: '/projects/cloud-app/',
            title: 'Cloud App',
            description: 'A cloud app',
            images: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
            ],
            links: {
                liveDemo: 'https://cloud-app-mahmoud.herokuapp.com/',
                github: 'https://github.com/mahmoud-ashraf-devloper/cloud_app_react'
            }
        }
    ]

    return (
        <div className='projects-page-font w-[93vw]  mx-auto  flex flex-col  space-y-6'>
            {

                projects.map((project, index) => (
                    <div key={index} className='flex space-y-10 flex-col md:flex-row'>
                        <div className='px-2 py-4 flex flex-col items-center bg-indigo-400/30 rounded-l-xl text-white  mt-10 col-span-2 md:w-1/5'>
                            <h1 className='text-xl font-bold'>{project.title}</h1>
                            <p className='text-sm py-6'>{project.description}</p>
                            <div className='flex py-6 pb-5 space-x-2'>
                                <span className='w-8 h-8 p-1 text-orange-500 shadow-sm hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out shadow-indigo-100 rounded-full bg-indigo-400/70'><AiFillHtml5 className='w-full h-full'/></span>
                                <span className='w-8 h-8 p-1 text-blue-500 shadow-sm hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out shadow-indigo-100 rounded-full bg-indigo-400/70'><DiCss3 className='w-full h-full'/></span>
                                <span className='w-8 h-8 p-1 text-blue-600 shadow-sm hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out shadow-indigo-100 rounded-full bg-indigo-400/70'><GrReactjs className='w-full h-full'/></span>
                                <span className='w-8 h-8 p-1 text-yellow-500 shadow-sm hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out shadow-indigo-100 rounded-full bg-indigo-400/70'><IoLogoJavascript className='w-full h-full'/></span>
                                <span className='w-8 h-8 p-1 text-cyan-500 shadow-sm hover:scale-110 hover:-translate-y-2 transition duration-300 ease-in-out shadow-indigo-100 rounded-full bg-indigo-400/70'><SiTailwindcss className='w-full h-full'/></span>
                            </div>
                            <div className='flex space-y-4 pt-3 flex-col'>
                                <button className='flex justify-center items-center bg-indigo-500 px-6 py-2 rounded-md hover:bg-indigo-700'>See Live <span className='ml-2'><AiOutlineEye /></span></button>
                                <button className='flex justify-center items-center bg-slate-900 px-6 py-2 rounded-md hover:bg-slate-700'>Github <span className='ml-2'><BsGithub /></span></button>
                            </div>
                        </div>
                        <div className=' col-span-5 w-full h-full'>
                            <Slider item={project} />
                        </div>
                    </div >
                ))

            }


        </div>
    );
}

export default Projects;
