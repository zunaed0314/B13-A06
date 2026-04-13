import React, { use, useState } from 'react';
import Cards from './Cards';

const BuyCards = ({addCard, dataPromise}) => {


    const [cardCount, setcardCount] = useState(0);

    const updateCardCount = (count) => {
        setcardCount(count);
    }

    const data = use(dataPromise);
    console.log(data);
    

    return (
        <div className='flex flex-col gap-4 px-30 justify-center items-center'>
            <p className='text-6xl text-black font-bold text-center '>
                Premium Digital Tools
            </p>
            <p className='text-2xl text-gray-500 font-[500] text-center w-200'>
                Choose from our curated collection of premium digital products designed
                to boost your productivity and creativity.
            </p>
            <div className='flex gap-2 p-2 rounded-full bg-purple-200'>
                <button className='btn rounded-full bg-purple-600'>Products</button>
                <button className='btn text-white rounded-full bg-transparent'>Cart({cardCount})</button>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {/* <div> */}
                    {
                        data.map(product => (
                            <Cards key={product.id} product={product} addCard={addCard} updateCardCount={updateCardCount} />
                        ))
                    }
                {/* </div> */}
            </div>

        </div>
    );
};

export default BuyCards;