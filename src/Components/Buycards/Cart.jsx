import React from 'react';
import { X } from 'lucide-react';

const Cart = ({ product, onRemove }) => {
    return (
        <div className='flex sm:flex-row items-center justify-between border-b py-3 bg-gray-100 hover:bg-gray-200 p-3 sm:p-5 rounded-md gap-3 sm:gap-0'>
            <div className='flex items-center gap-3 sm:gap-4 w-full sm:w-auto'>
                <img src={product.icon} alt={product.name} className='w-10 h-10 sm:w-12 sm:h-12' />
                <div className='flex flex-col'>
                    <p className='font-semibold text-black text-sm sm:text-base'>{product.name}</p>
                    <p className='text-gray-500 text-sm sm:text-base'>${product.price}</p>
                </div>
            </div>
            <button 
                onClick={() => onRemove(product.id)}
                className='btn bg-gray-300 text-red-500 hover:text-red-700 font-semibold px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base sm:w-auto'
            >
                Remove
            </button>
        </div>
    );
};

export default Cart;