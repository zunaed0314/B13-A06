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
        <div className='flex flex-col gap-4 p-5 rounded-md shadow-lg border-2 border-gray-100 bg-white relative'>
            <img src={product.icon} alt={product.name} className='w-8 h-8' />
            <p className='text-2xl text-black font-bold'>{product.name}</p>
            <p className='text-gray-600'>{product.description}</p>
            <p className='text-3xl text-black font-bold flex'>
                ${product.price}
                <span className='text-gray-400 text-xl flex items-end font-normal'>/Mo</span>
            </p>
            <p className='absolute top-5 right-5 bg-yellow-100 text-yellow-400 rounded-full px-5 py-2 font-bold'>{product.tag}</p>
            <ul>
                {features.map((feature, index) => (
                    <li className='flex text-black' key={index}>
                        <Check color='green' className='mr-2' /> {feature}
                    </li>
                ))}
            </ul>
            <button 
                className={`btn rounded-full mx-15 py-5 justify-self-center text-white duration-300 ${buy ? 'bg-green-400' : 'bg-purple-600'} border-none cursor-pointer`} 
                onClick={() => handleBuy(!buy)}
            >
                {buy ? <><Check /> Added to Cart</> : 'Buy Now'}
            </button>
        </div>
    );
};

export default Cards;