
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
        <div className='contact-page flex flex-col justify-center'>
            <div className='md:text-7xl text-5xl md:pl-20 pl-10 relative text-white pb-10 '>
                <span className='text-3xl pr-1 md:pr-3 text-indigo-500 codes'>&lt;h1&gt;</span>
                <AnimateLetters letterClass={letterClass} strArr={data.title.split('')} index={15} />
                <span className='text-3xl pl-1 md:pl-3 text-indigo-500 codes'>&lt;/h1&gt;</span>
            </div>
            <div className='w-[87vw] mx-8 md:w-[92vw] md:flex gap-4'>
                <div className='fade-in-2 md:basis-1/3 px-3 bg-indigo-500/25 rounded-xl'>
                    <div className='py-10 text-slate-400 '>
                        <div className='flex flex-col py-3'>
                            <label className='pb-1 text-3xl'>Name</label>
                            <input className='py-2 bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl mr-4 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' placeholder='Name' type="text" />
                        </div>
                        <div className=' flex flex-col py-3'>
                            <label className='pb-1 text-3xl'>Email</label>
                            <input className='py-2 bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl mr-4 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' placeholder='Email' type="email" />
                        </div>
                        <div className=' flex flex-col py-3'>
                            <label className='pb-1 text-3xl'>Subject</label>
                            <input className='py-2 bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl mr-4 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' placeholder='Subject' type="text" />
                        </div>
                        <div className=' flex flex-col py-3'>
                            <label className='pb-1 text-3xl'>Message</label>
                            <textarea placeholder='Message' className='py-2 bg-indigo-400/30 placeholder:text-white/50 placeholder:text-2xl mr-4 md:px-3 w-full opacity-95 rounded-lg focus:outline-none border-2 border-indigo-500' ></textarea>
                        </div>

                        <div className='flex justify-center'>
                            <button className='w-full md:w-2/3 fade-in-3 mt-8 block px-8 py-4 rounded-md tracking-wider from-indigo-500 to-purple-800 text-white bg-gradient-to-bl hover:bg-gradient-to-br hover:text-white/80 transition duration-300 ease-in'>Send Email</button>
                        </div>
                    </div>
                </div>
                <div className='fade-in-3 rounded-xl overflow-hidden grow  bg-indigo-500/25'>

                    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Contact;
