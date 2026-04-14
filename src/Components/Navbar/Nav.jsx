import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Nav = ({ cartCount }) => {
    return (
        <div className='px-30 py-4 flex justify-between items-center shadow-sm'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-purple-600 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Prodcuts</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <p className='text-4xl font-bold text-purple-500'>DigiTools</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-500 font-semibold text-xl">
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>Prodcuts</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-4 justify-center items-center'>
                    <div className='flex items-center'>
                        <ShoppingCart color='black' className='w-10 h-10' />
                        {cartCount > 0 && (
                            <span className='relative -top-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
                                {cartCount}
                            </span>
                        )}
                    </div>

                    <p className='font-bold text-black text-xl'>Log In</p>
                    <button className='bg-purple-600 text-white px-5 py-3 rounded-full font-bold cursor-pointer shadow text-xl'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;