import { Play } from 'lucide-react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

    const notify = () => toast("WOW SO EASY!")
    return (
        <div className='px-5 sm:px-13 md:px-17 lg:px-20 grid grid-cols-1 lg:grid-cols-2 pt-30 lg:pt-35 pb-10 gap-5'>
            <div className='flex flex-col gap-4 justify-center items-center lg:items-start'>
                <div className='bg-purple-200 gap-2 flex rounded-full px-3 py-1 w-fit'>
                    <img src="assets/group-5.png" className='w-5 h-5 sm:w-6 sm:h-6' alt="" />
                    <p className='text-purple-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-3xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-gray-700 text-center lg:text-start'>Supercharge your digital workflow</h1>

                <p className='text-gray-500 relative text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-start'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div className='relative flex flex-col sm:flex-row gap-3'>
                    <button className="bg-purple-700 cursor-pointer shadow-md rounded-full text-sm text-white md:text-lg lg:text-xl py-2 sm:py-3 md:py-4 px-4 sm:px-6 font-bold hover:bg-white hover:text-black hover:border hover:border-purple-700">
                        Explore Products
                    </button>
                    <button className='rounded-full cursor-pointer shadow-md border border-purple-900 py-2 sm:py-3 md:py-4 px-4 sm:px-6 bg-white text-purple-600 font-bold hover:bg-white hover:text-black text-sm sm:text-base md:text-lg lg:text-xl flex gap-2'>
                        <Play color='purple' className='w-4 h-4 sm:w-5 sm:h-5' />
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className='flex justify-center lg:justify-center items-center lg:p-10 lg:mt-0 h-full'>
                <img 
                    src="assets/banner.png" 
                    alt="" 
                    className='object-cover' 
                />
            </div>
        </div>
    );
};

export default Hero;