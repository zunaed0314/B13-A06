import React from 'react';

const Users = () => {
    return (
        <div className='bg-purple-500'>
            <div className='grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-50 py-8 sm:py-10 divide-y sm:divide-y-0 sm:divide-x divide-gray-500'>
                <div className='flex flex-col gap-2 sm:gap-4 justify-center items-center py-6 sm:py-0'>
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>50K+</p>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold'>Active Users</p>
                </div>
                <div className='flex flex-col gap-2 sm:gap-4 justify-center items-center py-6 sm:py-0'>
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>200+</p>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold'>Premium Tools</p>
                </div>
                <div className='flex flex-col gap-2 sm:gap-4 justify-center items-center py-6 sm:py-0'>
                    <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>4.9</p>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Users;