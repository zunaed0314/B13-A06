import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center mt-10'>
            <p className='text-4xl text-gray-800 font-bold'>Simple, Transparent Pricing</p>
            <p className='text-xl text-gray-600'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid grid-cols-3 gap-10 w-11/13 relative '>
                <div className='p-8 flex flex-col gap-4 rounded-md shadow-md bg-gray-100'>
                    <p className='text-4xl text-gray-900 font-bold'>Starter</p>
                    <p className='text-xl text-gray-500'>
                        Perfect for getting started
                    </p>
                    <p className='text-5xl text-black font-bold'>$0<span className='text-xl text-gray-500 font-medium '>/Month</span></p>
                    <ul className='text-gray-600 font-medium'>
                        <li className='flex'> <Check color='green' className='mr-2'/> Access to 10 free tools</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> Basic templates</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> Community Support</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> 1 Project per month</li>
                    </ul>
                    <button className='btn mt-auto rounded-full bg-purple-600'>Get Started for Free</button>
                </div>
                <div className='p-8 flex flex-col gap-4 rounded-md shadow-md relative bg-purple-500'>
                    <p className='text-4xl text-white font-bold'>Pro</p>
                    <p className='text-xl text-white'>
                        Best for professionals
                    </p>
                    <p className='text-5xl text-white font-bold'>$29<span className='text-xl text-white font-medium'>/Month</span></p>
                    <ul className='text-white font-medium'>
                        <li className='flex'> <Check color='white' className='mr-2'/> Access to all premium tools</li>
                        <li className='flex'> <Check color='white' className='mr-2'/> Unlimited templates</li>
                        <li className='flex'> <Check color='white' className='mr-2'/> Priority Support</li>
                        <li className='flex'> <Check color='white' className='mr-2'/> Unlimited Projects</li>
                        <li className='flex'> <Check color='white' className='mr-2'/> Cloud sync</li>
                        <li className='flex'> <Check color='white' className='mr-2'/> Advanced analytics</li>
                    </ul>
                    <button className='btn mt-auto rounded-full bg-white text-purple-600'>Start Pro Trial</button>
                    <p className='absolute shadow-md -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-yellow-600 bg-yellow-200 rounded-full font-medium whitespace-nowrap'>Most Popular</p>
                </div>
                <div className='p-8 flex flex-col gap-4 rounded-md shadow-md bg-gray-100'>
                    <p className='text-4xl text-gray-900 font-bold'>Enterprise</p>
                    <p className='text-xl text-gray-500'>
                        For teams and business
                    </p>
                    <p className='text-5xl text-black font-bold'>$99<span className='text-xl text-gray-500 font-medium'>/Month</span></p>
                    <ul className='text-gray-600 font-medium'>
                        <li className='flex'> <Check color='green' className='mr-2'/> Everything in Pro</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> Team collaboration</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> Custom integration</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> Dedicated support</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> SLA guarantee</li>
                        <li className='flex'> <Check color='green' className='mr-2'/> Custom branding</li>
                    </ul>
                    <button className='btn mt-auto rounded-full bg-purple-600'>Contact sales</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Pricing;