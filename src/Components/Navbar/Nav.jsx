import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Nav = ({ cartCount }) => {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-[120px] py-4 flex justify-between items-center shadow-sm'>
            <div className="navbar-start flex items-center gap-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Products</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <p className='text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500'>DigiTools</p>
            </div>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500 font-semibold text-sm md:text-base gap-2">
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>Products</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            
            <div className="navbar-end">
                <div className='flex gap-2 sm:gap-4 justify-center items-center'>
                    <div className='relative flex items-center'>
                        <ShoppingCart color='black' className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                        {cartCount > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold'>
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <p className='font-bold text-black text-sm sm:text-base md:text-lg lg:text-xl'>Log In</p>
                    <button className='bg-purple-600 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full font-bold cursor-pointer shadow text-sm sm:text-base md:text-lg lg:text-xl'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nav;