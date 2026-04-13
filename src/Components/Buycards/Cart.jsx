import React from 'react';
import { X } from 'lucide-react';

const Cart = ({ product, onRemove }) => {
    return (
        <div className='flex items-center justify-between border-b border-gray-200 py-3 hover:bg-gray-300 p-5'>
            <div className='flex items-center gap-4'>
                <img src={product.icon} alt={product.name} className='w-12 h-12' />
                <div className='flex flex-col'>
                    <p className='font-semibold text-black'>{product.name}</p>
                    <p className='text-gray-500'>${product.price}</p>
                </div>
            </div>
            <button 
                onClick={() => onRemove(product.id)}
                className='btn bg-gray-300 text-red-500 hover:text-red-700 font-semibold'
            >
                Remove
            </button>
        </div>
    );
};

export default Cart;