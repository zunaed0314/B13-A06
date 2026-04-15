import React from 'react';

const GS = () => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-16 md:py-20 bg-gray-100 flex flex-col justify-center items-center gap-3'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold text-center'>Get Start in 3 Steps</p>
            <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-10'>

                <div className='bg-white rounded-md shadow flex flex-col justify-center items-center gap-4 px-1 sm:px-3 md:px-5 lg:px-6 py-5 sm:py-8 md:py-10 transition duration:1000 hover:-translate-y-1'>
                    <div className='p-3 sm:p-4 md:p-5 bg-gray-200 rounded-full'>
                        <img src="assets/user.png" alt="user" className='w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto' />
                    </div>
                    <p className='text-xl sm:text-2xl md:text-3xl text-indigo-950 font-bold text-center'>Create Account</p>
                    <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center mx-4 sm:mx-6 md:mx-10'>
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                <div className='bg-white rounded-md shadow flex flex-col justify-center items-center gap-4 px-1 sm:px-3 md:px-5 lg:px-6 py-5 sm:py-8 md:py-10 transition duration:1000 hover:-translate-y-1'>
                    <div className='p-3 sm:p-4 md:p-5 bg-gray-200 rounded-full'>
                        <img src="assets/package.png" alt="package" className='w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto' />
                    </div>
                    <p className='text-xl sm:text-2xl md:text-3xl text-indigo-950 font-bold text-center'>Choose Products</p>
                    <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center mx-4 sm:mx-6 md:mx-10'>
                        Download and start using your premium tools immediately.
                    </p>
                </div>

                <div className='bg-white rounded-md shadow flex flex-col justify-center items-center gap-4 px-1 sm:px-3 md:px-5 lg:px-6 py-5 sm:py-8 md:py-10 transition duration:1000 hover:-translate-y-1'>
                    <div className='p-3 sm:p-4 md:p-5 bg-gray-200 rounded-full'>
                        <img src="assets/rocket.png" alt="rocket" className='w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto' />
                    </div>
                    <p className='text-xl sm:text-2xl md:text-3xl text-indigo-950 font-bold text-center'>Start Creating</p>
                    <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center mx-4 sm:mx-6 md:mx-10'>
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GS;