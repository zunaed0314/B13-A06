import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center my-8 sm:my-10 md:my-15 px-4 sm:px-6 md:px-8'>
            <p className='text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold text-center'>Simple, Transparent Pricing</p>
            <p className='text-base sm:text-lg md:text-xl text-gray-600 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full relative sm:px-11 md:px-28'>
                
                <div className='p-6 sm:p-8 flex flex-col gap-4 rounded-md shadow-md bg-gray-100'>
                    <p className='text-3xl sm:text-4xl text-gray-900 font-bold'>Starter</p>
                    <p className='text-base sm:text-xl text-gray-500'>
                        Perfect for getting started
                    </p>
                    <p className='text-3xl sm:text-4xl md:text-5xl text-black font-bold'>$0<span className='text-base sm:text-xl text-gray-500 font-medium'>/Month</span></p>
                    <ul className='text-gray-600 font-medium space-y-2'>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Access to 10 free tools</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Basic templates</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Community Support</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> 1 Project per month</li>
                    </ul>
                    <button className='btn mt-auto mx-auto px-20 rounded-full bg-purple-600 text-white py-2 sm:py-3'>Get Started for Free</button>
                </div>
                
                <div className='p-6 sm:p-8 flex flex-col gap-4 rounded-md shadow-md relative bg-purple-500'>
                    <p className='text-3xl sm:text-4xl text-white font-bold'>Pro</p>
                    <p className='text-base sm:text-xl text-white'>
                        Best for professionals
                    </p>
                    <p className='text-3xl sm:text-4xl md:text-5xl text-white font-bold'>$29<span className='text-base sm:text-xl text-white font-medium'>/Month</span></p>
                    <ul className='text-white font-medium space-y-2'>
                        <li className='flex text-sm sm:text-base'> <Check color='white' className='mr-2 flex-shrink-0'/> Access to all premium tools</li>
                        <li className='flex text-sm sm:text-base'> <Check color='white' className='mr-2 flex-shrink-0'/> Unlimited templates</li>
                        <li className='flex text-sm sm:text-base'> <Check color='white' className='mr-2 flex-shrink-0'/> Priority Support</li>
                        <li className='flex text-sm sm:text-base'> <Check color='white' className='mr-2 flex-shrink-0'/> Unlimited Projects</li>
                        <li className='flex text-sm sm:text-base'> <Check color='white' className='mr-2 flex-shrink-0'/> Cloud sync</li>
                        <li className='flex text-sm sm:text-base'> <Check color='white' className='mr-2 flex-shrink-0'/> Advanced analytics</li>
                    </ul>
                    <button className='btn mt-auto mx-auto px-20 rounded-full bg-white text-purple-600 py-2 sm:py-3'>Start Pro Trial</button>
                    <p className='absolute -top-3 left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 text-yellow-600 bg-yellow-200 rounded-full font-medium border-2 border-black text-xs sm:text-sm'>Most Popular</p>
                </div>
                
                <div className='p-6 sm:p-8 flex flex-col gap-4 rounded-md shadow-md bg-gray-100'>
                    <p className='text-3xl sm:text-4xl text-gray-900 font-bold'>Enterprise</p>
                    <p className='text-base sm:text-xl text-gray-500'>
                        For teams and business
                    </p>
                    <p className='text-3xl sm:text-4xl md:text-5xl text-black font-bold'>$99<span className='text-base sm:text-xl text-gray-500 font-medium'>/Month</span></p>
                    <ul className='text-gray-600 font-medium space-y-2'>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Everything in Pro</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Team collaboration</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Custom integration</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Dedicated support</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> SLA guarantee</li>
                        <li className='flex text-sm sm:text-base'> <Check color='green' className='mr-2 flex-shrink-0'/> Custom branding</li>
                    </ul>
                    <button className='btn mt-auto mx-auto px-20 rounded-full bg-purple-600 text-white py-2 sm:py-3'>Contact sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;