import React from 'react';

const Users = () => {
    return (
        <div className='bg-purple-500'>
            <div className='grid grid-cols-3 px-50 py-10 divide-x divide-gray-500'>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <p className='text-6xl font-bold text-white'>50K+</p>
                    <p className='text-2xl text-gray font-semibold'>Active USers</p>
                </div>
                <div  className='flex flex-col gap-4 justify-center items-center'>
                    
                    <p className='text-6xl font-bold text-white' >200+</p>
                    <p className='text-2xl text-gray font-semibold'>Premium Tools</p>
                </div>
                <div  className='flex flex-col gap-4 justify-center items-center'>
                    
                    <p className='text-6xl font-bold text-white'>4.9</p>
                    <p className='text-2xl text-gray font-semibold'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Users;