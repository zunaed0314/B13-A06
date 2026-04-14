import { Play } from 'lucide-react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

    const notify = () => toast("WOW SO EASY!")
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-0 min-h-screen'>
            <div className='flex flex-col justify-center  sm:items-center md:items-start gap-4 py-10 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 '>
                <div className='bg-purple-200 gap-2 flex rounded-full px-3 py-1 w-fit relative items-center'>
                    <img src="assets/group-5.png" className='w-5 h-5 sm:w-6 sm:h-6' alt="" />
                    <p className='text-purple-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-3xl sm:text-5xl md:text-5xl lg:text-7xl sm:text-center md:text-start font-bold text-gray-700 relative'>Supercharge your digital workflow</h1>

                <p className='text-gray-500 font-[500] relative text-sm sm:text-base md:text-lg lg:text-xl sm:text-center md:text-start'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div className='relative flex flex-col sm:flex-row gap-3'>
                    <button className="btn bg-purple-700 rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 hover:bg-white hover:text-black hover:border-2 hover:border-purple-700">
                        Explore Products
                    </button>
                    <button className='btn rounded-full border-1 border-purple-900 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-purple-600 font-semibold hover:bg-white hover:text-black text-sm sm:text-base md:text-lg lg:text-xl flex items-center gap-2'>
                        <Play color='purple' className='w-4 h-4 sm:w-5 sm:h-5' />
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className='flex justify-center lg:justify-center items-center sm:pb-5 lg:p-10 lg:mt-0 h-full'>
                <img 
                    src="assets/banner.png" 
                    alt="" 
                    className=' object-cover' 
                />
                <button className='btn hidden' onClick={notify}>Notify!</button>
                <ToastContainer
                    progressStyle={{ 
                        background: "#22c55e",
                        backgroundImage: "none"  
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;