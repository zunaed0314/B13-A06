import React from 'react';

const Ready = () => {
    return (
        <div className='flex flex-col py-16 sm:py-20 md:py-30 bg-purple-600 justify-center items-center gap-4 px-4 sm:px-6 md:px-8'>
            <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center'>Ready To Transform Your Workflow?</p>
            <p className='text-sm sm:text-base md:text-lg text-white text-center max-w-2xl'>
                Join thousands of professionals who are already using Digitools to work smarter.
                Start your free trial today.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <button className='btn text-purple-600 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base'>Explore Products</button>
                <button className='btn text-white bg-purple-600 border-2 border-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base'>View Pricing</button>
            </div>
            <p className='text-xs sm:text-sm text-white/80'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Ready;