import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0B1220] text-gray-300 px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

                <div className="md:col-span-2">
                    <h2 className="text-white text-2xl font-semibold mb-2">DigiTools</h2>
                    <p className="text-md text-gray-400">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with a suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-medium mb-3 text-lg">Product</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-medium mb-3 text-lg">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-medium mb-3 text-lg">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>

                    <div className="flex space-x-3 mt-4">
                        <FaYoutube className="w-5 h-5 cursor-pointer hover:text-white" />
                        <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-white" />
                        <FaTwitter className="w-5 h-5 cursor-pointer hover:text-white" />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>© 2025 DigiTools. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <span className="cursor-pointer hover:text-gray-300">Privacy Policy</span>
                    <span className="cursor-pointer hover:text-gray-300">Terms of Service</span>
                    <span className="cursor-pointer hover:text-gray-300">Cookies</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;