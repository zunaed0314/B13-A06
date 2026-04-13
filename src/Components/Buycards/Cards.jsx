import { Check } from 'lucide-react';
import React, { useState } from 'react';

const Cards = ({ product, addCard, updateCardCount }) => {

    const [buy, setBuy] = useState(false);

    const handleBuy =(status) => {
        setBuy(status);
        if(status){
            addCard(product);
            updateCardCount(prevCount => prevCount + 1);
        }
    }

    const features = product.features;
    return (
        <div className='flex flex-col gap-4 p-5 rounded-md shadow-lg border-2 border-red-500 bg-white'>
            <img src={product.icon} alt={product.name} className='w-8 h-8'></img>
            <p className='text-2xl text-black'>{product.name}</p>
            <p className='text-black'>{product.description}</p>
            <p className='text-3xl text-black font-bold flex'>{product.price}$ <span className='text-gray-400 text-xl flex items-end font-normal'>/Mo</span></p>
            <ul>
                {
                    features.map((feature,index) => <li className='flex text-black' key={index}><Check color='green' className='mr-2'/> {feature}</li>)
                }
            </ul>
            <button className='btn rounded-full text-white bg-purple-600 border-none ' onClick={() => {handleBuy(!buy)}}>
                
            </button>

        </div>
    );
};

export default Cards;