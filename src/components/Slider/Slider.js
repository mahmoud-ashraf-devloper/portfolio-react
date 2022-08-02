import React, { useState } from 'react';
import { GrNext } from 'react-icons/gr'

import './style.scss';

const Slider = ({ item }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const slideTo = (index) => {
        setCurrentImage(index);
    }
    return (
        <div className="relative h-full bg-white rounded-r-xl" >
            {/* Carousel wrapper */}
            <div className="relative shadow-md h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="w-full h-full" >
                    <img src={item.baseUrl + item.images[currentImage]} className="hover:scale-125 hover:rotate-1 transition duration-500 absolute block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>

            </div>
            {/* Slider indicators */}
            <div className="absolute shadow-lg text-black z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
                {
                    item.images.map((_, index) => (
                        <button key={index} onClick={() => slideTo(index)} type="button" className={(currentImage === index ? "w-3 bg-indigo-800 hover:transform hover:-translate-y-2 transition duration-300 hover:ease-in-out h-3 rounded-full": "w-3 bg-slate-900/70 hover:transform hover:-translate-y-2 hover:transition hover:duration-300 hover:ease-in-out h-3 rounded-full")} ></button>
                    ))
                }
            </div>
            {/* Slider controls */}
            <button onClick={() => (currentImage - 1) >= 0 ? slideTo(currentImage - 1) : null} type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <GrNext className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 rotate-180 flex justify-center items-center" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={() => (currentImage + 1) <= item.images.length - 1 ? slideTo(currentImage + 1) : null} type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <GrNext className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800  flex justify-center items-center" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Slider;
