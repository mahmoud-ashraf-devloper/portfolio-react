import React from 'react';
import Slider from "react-slick";
import './style.scss';

const Project = ({ project }) => {
   
    return (
        <div className='grid md:grid-cols-6 gap-6 w-[82vw] min-h-[83vh] mx-auto'>
            <div className='md:col-span-2 '>

            </div>
            <div className='md:col-span-4 min-h-[600px] max-w-[78vw]'>
                {/* <Slider >
                    {
                        project.images.map((image, index) => (
                            <div key={index}>
                                <img src={project.baseUrl+image} alt="" />
                            </div>
                        ))
                    }
                </Slider> */}
            </div>
        </div>
    );
}

export default Project;
