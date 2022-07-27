import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Logo from '../../assets/images/logo.png';
import HomeBg from '../../assets/images/home-bg.jpg';

const Layout = () => {
    return (
        <div className='h-screen '>
            <Sidebar />
            <div className=' h-full w-full  fade-in-2 relative md:left-36 left-20  px-3 text-4xl'>
                {/* <img className=' absolute md:w-1/2 w-3/4 right-0 md:top-60 bottom-40 bg-logo-custom' src="" alt="" /> */}
                <img  className='absolute left-0 w-full blur-m h-full bg-slate-900 opacity-30 ' src={HomeBg} alt='/' />
                <div className='absolute h-full flex flex-col justify-between '>
                    <div className='text-indigo-500'>
                        <span className='codes'>&lt;html&gt;</span>
                        <br />
                        <span className='ml-8 codes'>&lt;body&gt;</span>

                    </div>

                            <Outlet />
                    <div className='text-indigo-500'>
                        <br />
                        <span className='ml-8 codes'>
                            &lt;/body&gt;
                        </span>
                        <br />
                        <span className='codes'>&lt;/html&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
