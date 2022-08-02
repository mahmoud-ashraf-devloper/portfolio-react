import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import HomeBg from '../../assets/images/home-bg.jpg';

const Layout = () => {
    return (
        <div className='flex'>
            <div className='md:w-20 w-12 fixed z-10 h-full'>
                <Sidebar />
            </div>
            <div className='fade-in-2 w-full min-h-screen md:ml-20 ml-12  text-lg '>
                {/* <img className=' absolute md:w-1/2 w-3/4 right-0 md:top-60 bottom-40 bg-logo-custom' src="" alt="" /> */}
                <img className='bg-repeat-y left-0 top-0 fixed z-0 blur-m min-h-screen w-screen bg-slate-900 opacity-30 ' src={HomeBg} alt='/' />
                <div className=''>
                    <div className='text-indigo-500'>
                        <span className='codes'>&lt;html&gt;</span>
                        <br />
                        <span className='md:ml-8 ml-3 codes'>&lt;body&gt;</span>

                    </div>

                    <div className='min-h-[82vh] flex md:py-0 py-6 relative md:items-center z-10' >
                        <Outlet />
                    </div>

                    <div className='text-indigo-500'>
                        
                        <span className='md:ml-8 ml-3 codes'>
                            &lt;/body&gt;
                        </span>
                        <br/>
                        <span className='codes'>&lt;/html&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
