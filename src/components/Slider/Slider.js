import React, { useState } from 'react';
import { GrNext } from 'react-icons/gr'

import './style.scss';

const Slider = ({ item }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const slideTo = (index) => {
        setCurrentImage(index);
    }
    return (
        <div className="relative h-full bg-white md:rounded-r-xl  rounded-xl md:rounded-none overflow-hidden" >
            {/* Carousel wrapper */}
            <div className="relative shadow-md h-56  md:h-96">
                {/* Item 1 */}
                <div className="w-full h-full" >
                    <img src={item.baseUrl + item.images[currentImage]} className="hover:scale-105 hover:rotate-[1deg] transition duration-500 absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

            </div>
            {/* Slider indicators */}
            <div className="absolute opacity-60 hover:opacity-100 transition duration-200 delay-75 ease-in-out shadow-lg bg-black/60 px-6 py-2 rounded-md z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2 md:overflow-hidden overflow-scroll">
                {
                    item.images.map((image, index) => (
                        <button key={index} onClick={() => slideTo(index)} type="button" className={(currentImage === index ? " hover:transform hover:-translate-y-2  outline outline-4 outline-indigo-400  transition duration-300 ease-in-out rounded-md": "bg-slate-900/70 hover:transform hover:-translate-y-2 hover:transition hover:duration-300 hover:ease-in-out  rounded-full")} ><img className='md:min-w-[40px] md:h-[35px] min-w-[30px] h-[30px] bg-cover shadow-md rounded-md' src={item.baseUrl +image} alt="" srcset="" /></button>
                    ))
                }
            </div>
            {/* Slider controls */}
            <button onClick={() => (currentImage - 1) >= 0 ? slideTo(currentImage - 1) : null} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 bg-black/5 group-hover:bg-black/10 rounded-full sm:w-10 sm:h-10  dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <GrNext className="w-5 h-5  sm:w-6 sm:h-6 dark:text-gray-800 rotate-180 flex justify-center items-center" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => (currentImage + 1) <= item.images.length - 1 ? slideTo(currentImage + 1) : null} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 bg-black/5 group-hover:bg-black/10 rounded-full sm:w-10 sm:h-10  dark:bg-gray-800/30  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <GrNext className="w-5 h-5 sm:w-6 sm:h-6 dark:text-gray-800  flex justify-center items-center" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Slider;
