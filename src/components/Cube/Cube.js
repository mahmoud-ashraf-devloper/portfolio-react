import React from 'react';
import './style.scss';

// cuble icons
import { GrReactjs } from 'react-icons/gr';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
const Cube = () => {
    return (
        <div className='cube-container  col-span-4 md:relative md:flex md:justify-center md:pt-20 md:-bottom-0 absolute hidden '>
                    <div className='box'>
                        <div className="card" id="front">
                            <div className='w-44'>
                                <GrReactjs className='w-full h-full text-[#5ED4F4] mb-3' />
                            </div>
                            ReactJs
                        </div>
                        <div className="card" id="back">
                            <div className='w-44'>
                                <TbBrandNextjs className='w-full h-full text-black mt-3' />
                            </div>
                            NextJs
                        </div>
                        <div className="card" id="left">
                            <div className='w-44'>
                                <IoLogoJavascript className='w-full h-full text-[#EFD81D] mt-3' />
                            </div>
                            Javascript
                        </div>
                        <div className="card" id="right">
                            <div className='w-44'>
                                <AiFillHtml5 className='w-full h-full text-[#ee4744] mt-3' />
                            </div>
                            Html
                        </div>
                        <div className="card" id="top">
                            <div className='w-44'>
                                <DiCss3 className='w-full h-full text-[#3453ef] mt-3' />
                            </div>
                            CSS3
                        </div>
                        <div className="card" id="bottom">
                            <div className='w-44'>
                                <SiTailwindcss className='w-full h-full text-cyan-300 mt-3' />
                            </div>
                            Tailwindcss
                        </div>
                    </div>
                </div>
    );
}

export default Cube;
