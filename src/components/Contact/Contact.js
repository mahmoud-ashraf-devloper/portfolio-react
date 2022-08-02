
import React, { useEffect, useState } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet/Popup'
import { Marker } from 'react-leaflet/Marker'
import AnimateLetters from './../AnimateLetters/AnimateLetters';

import './style.scss';

const Contact = () => {
    const data = {
        title: 'Contact Me',
    }

    const position = [28.499408, 30.792526]

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, [])

    return (
            <div className='w-full  md:mx-6 px-2 contact-page '>
                <div className='md:text-5xl text-3xl md:pl-8  relative text-white pb-6 '>
                    <span className='text-3xl pr-1 md:pr-3 text-indigo-500 codes'>&lt;h1&gt;</span>
                    <AnimateLetters letterClass={letterClass} strArr={data.title.split('')} index={15} />
                    <span className='text-3xl pl-1 md:pl-3 text-indigo-500 codes'>&lt;/h1&gt;</span>
                </div>
                <div className='md:grid md:grid-cols-6 gap-6'>
                    <div className='col-span-2 fade-in-1 px-3 bg-indigo-500/25 rounded-xl'>
                        <div className='py-10 text-slate-400  font-mono font-sans'>
                            <div className='flex flex-col py-3'>
                                <label className='pb-1 md:text-xl'>Name</label>
                                <input className=' bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl placeholder:text-sm md:placeholder:text-sm placeholder:font-mono placeholder:font-sans pl-2 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' placeholder='Name' type="text" />
                            </div>
                            <div className=' flex flex-col py-3'>
                                <label className='pb-1 md:text-xl'>Email</label>
                                <input className=' bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl placeholder:text-sm md:placeholder:text-sm placeholder:font-mono placeholder:font-sans pl-2 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' placeholder='Email' type="email" />
                            </div>
                            <div className=' flex flex-col py-3'>
                                <label className='pb-1 md:text-xl'>Subject</label>
                                <input className=' bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl placeholder:text-sm md:placeholder:text-sm placeholder:font-mono placeholder:font-sans pl-2 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' placeholder='Subject' type="text" />
                            </div>
                            <div className=' flex flex-col py-3'>
                                <label className='pb-1 md:text-xl'>Message</label>
                                <textarea placeholder='Message' className=' bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl placeholder:text-sm md:placeholder:text-sm placeholder:font-mono placeholder:font-sans pl-2 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' ></textarea>
                            </div>

                            <div className='flex justify-center'>
                                <button className='w-full md:w-2/3 fade-in-3 mt-8 block md:px-6 px-4 text-sm md:text-lg font-bold py-2 md:py-2 rounded-md tracking-wider from-indigo-500 to-purple-800 text-white bg-gradient-to-bl hover:bg-gradient-to-br hover:text-white/80 transition duration-300 ease-in'>Send Email</button>
                            </div>
                        </div>
                    </div>
                    <div className='fade-in-3 rounded-xl overflow-hidden col-span-4 md:h-full md:w-full h-[300px] mt-3 md:mt-0 bg-indigo-500/25'>
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Mahmoud Ashraf <br /> Al Minya Bani mazar.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
    );
}

export default Contact;
