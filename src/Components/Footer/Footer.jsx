import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#0B1220] text-gray-300 px-4 sm:px-6 md:px-25 py-8 sm:py-10 md:py-12">
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
                <div className="sm:col-span-2 md:col-span-1 flex flex-col justify-center ">
                    <h3 className="text-white text-md sm:text-xl font-semibold mb-2">DigiTools</h3>
                    <p className="text-sm sm:text-sm text-gray-400 ">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with a suite of powerful tools.
                    </p>
                </div>

                <div className=' flex flex-col items-start justify-center relative md:left-15 '>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Product</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="cursor-pointer hover:text-white">Features</li>
                        <li className="cursor-pointer hover:text-white">Pricing</li>
                        <li className="cursor-pointer hover:text-white">Templates</li>
                        <li className="cursor-pointer hover:text-white">Integrations</li>
                    </ul>
                </div>

                <div className=' flex flex-col items-start relative md:left-15 '>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Company</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="cursor-pointer hover:text-white">About</li>
                        <li className="cursor-pointer hover:text-white">Blog</li>
                        <li className="cursor-pointer hover:text-white">Careers</li>
                        <li className="cursor-pointer hover:text-white">Press</li>
                    </ul>
                </div>

                <div className=' flex flex-col items-start relative md:left-15'>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Resources</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="cursor-pointer hover:text-white">Documentation</li>
                        <li className="cursor-pointer hover:text-white">Help Center</li>
                        <li className="cursor-pointer hover:text-white">Community</li>
                        <li className="cursor-pointer hover:text-white">Contact</li>
                    </ul>


                </div>

                <div className=' flex flex-col items-start relative md:left-15'>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Social Links</h3>
                    <div className="flex space-x-3">
                        <div className='bg-white w-7 h-7 rounded-full transition hover:scale-110'>
                            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 " color='black' />
                        </div>
                        <div className='bg-white w-7 h-7 rounded-full transition hover:scale-110'>
                            <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color='black' />
                        </div>
                        <div className='bg-white w-7 h-7 rounded-full transition hover:scale-110'>
                            <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" color='black' />
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-2">
                <p>© 2025 DigiTools. All rights reserved.</p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                    <span className="cursor-pointer hover:text-gray-300">Privacy Policy</span>
                    <span className="cursor-pointer hover:text-gray-300">Terms of Service</span>
                    <span className="cursor-pointer hover:text-gray-300">Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;