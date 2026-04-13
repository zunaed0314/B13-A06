import { Play } from 'lucide-react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Add this import

const Hero = () => {

    const notify = () => toast("WOW SO EASY!")
    return (
        <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-start gap-4 py-61 px-30'>
                <div className='bg-purple-200 gap-2 flex rounded-full px-3 py-1 w-fit relative left-22'>
                    <img src="assets/group-5.png" className='w-6 h-6' alt="" />
                    <p className='text-purple-500 font-semibold'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='text-7xl font-bold text-gray-700 relative left-22'>Supercharge your digital workflow</h1>

                <p className='text-gray-500 font-[500] relative left-22'>Access premium AI tools, design assets, templates, and productivity <br></br>

                    software—all in one place. Start creating faster today.

                    <br></br>
                    Explore Products
                </p>
                <div className='relative left-22 flex gap-3'>
                    <button className="btn bg-purple-700 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-purple-700">Explore Products</button>
                    <button className='btn rounded-full text-white font-semibold hover:bg-white hover:text-black'>
                        <Play />
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className='flex justify-start items-center pl-10'>
                <img src="assets/banner.png" alt="" />
                <button className='btn' onClick={notify}>Notify!</button>
                <ToastContainer
                    progressStyle={{ 
                        background: "#22c55e",
                        backgroundImage: "none"  // This removes the rainbow gradient
                    }}
                />
            </div>
        </div>
    );
};

export default Hero;