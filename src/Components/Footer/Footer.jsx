import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0B1220] text-gray-300 px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
                <div className="sm:col-span-2">
                    <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2">DigiTools</h2>
                    <p className="text-sm sm:text-base text-gray-400">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with a suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Product</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="cursor-pointer hover:text-white">Features</li>
                        <li className="cursor-pointer hover:text-white">Pricing</li>
                        <li className="cursor-pointer hover:text-white">Templates</li>
                        <li className="cursor-pointer hover:text-white">Integrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Company</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="cursor-pointer hover:text-white">About</li>
                        <li className="cursor-pointer hover:text-white">Blog</li>
                        <li className="cursor-pointer hover:text-white">Careers</li>
                        <li className="cursor-pointer hover:text-white">Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-medium mb-3 text-base sm:text-lg">Resources</h3>
                    <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="cursor-pointer hover:text-white">Documentation</li>
                        <li className="cursor-pointer hover:text-white">Help Center</li>
                        <li className="cursor-pointer hover:text-white">Community</li>
                        <li className="cursor-pointer hover:text-white">Contact</li>
                    </ul>

                    <div className="flex space-x-3 mt-4">
                        <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                        <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                        <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-white" />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 flex flex-col md:flex-row justify-between text-xs sm:text-sm text-gray-500 gap-2">
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