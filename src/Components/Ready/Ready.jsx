import React from 'react';

const Ready = () => {
    return (
        <div className='flex flex-col py-30 bg-purple-600 justify-center items-center gap-4'>
            <p className='text-4xl font-bold text-white text-center'>Ready To Transform Your Workflow</p>
            <p>Join thousands of professionals who are already using Digitools to work smarter.
                Start your free trial today.</p>
            <div className='flex gap-4'>
                <button className='btn text-purple-600 bg-white p-5 rounded-full'>Explore Products</button>
                <button className='btn text-white bg-purple-600 border-2 border-white rounded-full'>View Pricing</button>
            </div>
            <p className=''>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Ready;