import { Check } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Cards = ({ product, addCard, removeFromCart, updateCardCount, cartItems }) => {
    const [buy, setBuy] = useState(false);

    useEffect(() => {
        const isInCart = cartItems.some(item => item.id === product.id);
        setBuy(isInCart);
    }, [cartItems]);

    const handleBuy = (status) => {
        if (status) {
            addCard(product);
            updateCardCount(prevCount => prevCount + 1);
            setBuy(true);
        } else {
            removeFromCart(product.id);
            updateCardCount(prevCount => prevCount - 1);
            setBuy(false);
        }
    }

    const features = product.features;
    
    return (
        <div className='flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 rounded-md shadow-lg border-2 border-gray-100 bg-white relative transition duration:1000 hover:-translate-y-1'>
            <img src={product.icon} alt={product.name} className='w-6 h-6 sm:w-8 sm:h-8' />
            <p className='text-xl sm:text-2xl text-black font-bold'>{product.name}</p>
            <p className='text-sm sm:text-base text-gray-600'>{product.description}</p>
            <p className='text-2xl sm:text-3xl text-black font-bold flex'>
                ${product.price}
                <span className='text-gray-400 text-lg sm:text-xl flex items-end font-normal'>/Mo</span>
            </p>
            {product.tag && (
                <p className='absolute top-2 right-2 sm:top-5 sm:right-5 bg-yellow-100 text-yellow-400 rounded-full px-2 py-1 sm:px-5 sm:py-2 font-bold text-xs sm:text-sm'>
                    {product.tag}
                </p>
            )}
            <ul>
                {features.map((feature, index) => (
                    <li className='flex text-black text-sm sm:text-base' key={index}>
                        <Check color='green' className='mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5' /> 
                        {feature}
                    </li>
                ))}
            </ul>
            <button 
                className={`btn mx-15  rounded-full mt-auto py-2 sm:py-3 md:py-5 px-4 sm:px-6 text-white duration-300 ${buy ? 'bg-green-400' : 'bg-purple-600'} border-none cursor-pointer text-sm sm:text-base`} 
                onClick={() => handleBuy(!buy)}
            >
                {buy ? <><Check className='w-4 h-4' /> Added to Cart</> : 'Buy Now'}
            </button>
        </div>
    );
};

export default Cards;