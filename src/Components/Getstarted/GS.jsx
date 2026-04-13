import React from 'react';

const GS = () => {
    return (
        <div className='px-20 py-20 bg-gray-100 flex flex-col justify-center items-center gap-3'>
            <p className='text-4xl text-gray-800 font-bold'>Get Start in 3 Steps</p>
            <p className='text-xl text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-3 px-15 gap-5 mt-10'>

                <div className='bg-white rounded-md shadow flex flex-col justify-center items-center gap-4 px-10  py-20'>
                    <div className='p-5 bg-gray-200 rounded-full'>
                        <img src="assets/user.png"></img>
                    </div>

                    <p className='text-3xl text-indigo-950 font-bold'>Create Account</p>
                    <p className='text-xl text-gray-500 text-center mx-10'>
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>
                <div className='bg-white rounded-md shadow flex flex-col justify-center items-center gap-4 px-10  py-20'>
                    <div className='p-5 bg-gray-200 rounded-full'>
                        <img src="assets/package.png"></img>
                    </div>

                    <p className='text-3xl text-indigo-950 font-bold'>Choose Products</p>
                    <p className='text-xl text-gray-500 text-center mx-10'>
                        Download and start using your premium
                        tools immediately.
                    </p>
                </div>
                <div className='bg-white rounded-md shadow flex flex-col justify-center items-center gap-4 px-10  py-20'>
                    <div className='p-5 bg-gray-200 rounded-full'>
                        <img src="assets/rocket.png"></img>
                    </div>

                    <p className='text-3xl text-indigo-950 font-bold'>Start Creating</p>
                    <p className='text-xl text-gray-500 text-center mx-10'>
                        Browse our catalog and select the tools
                        that fit your needs.                    </p>
                </div>

            </div>
        </div>
    );
};

export default GS;