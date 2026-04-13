import React, { use, useState } from 'react';
import Cards from './Cards';
import Cart from './Cart';

const BuyCards = ({ addCard, removeFromCart, dataPromise, getCard }) => {
    const [cardCount, setcardCount] = useState(0);
    const [showProducts, setShowProducts] = useState(true);
    const [allCards, setAllCards] = useState([]);

    const updateCardCount = (count) => {
        setcardCount(count);
    }

    const cardStatus = (status) => {
        setShowProducts(status);
        if (status === false) {
            const cards = getCard();
            setAllCards(cards);
        }
    }

    const data = use(dataPromise);

    return (
        <div>
            <div className='flex flex-col gap-4 justify-center items-center w-full px-30'>
                <p className='text-6xl text-black font-bold text-center'>
                    Premium Digital Tools
                </p>
                <p className='text-2xl text-gray-500 font-[500] text-center w-200'>
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>
                <div className='flex gap-2 p-2 rounded-full bg-purple-200'>
                    <button className='btn rounded-full bg-purple-600' onClick={() => cardStatus(true)}>Products</button>
                    <button className='btn text-black rounded-full bg-transparent' onClick={() => cardStatus(false)}>Cart({cardCount})</button>
                </div>

                <div className={`grid grid-cols-3 gap-5 w-380 ${showProducts ? 'block' : 'hidden'}`}>
                    {data.map(product => (
                        <Cards key={product.id}
                            product={product}
                            addCard={addCard}
                            removeFromCart={removeFromCart}
                            updateCardCount={updateCardCount} />
                    ))}
                </div>

                <div className={`p-6 w-full ${!showProducts ? 'block' : 'hidden'}`}>
                    <p className='text-2xl font-bold text-black mb-4'>Your Cart</p>
                    {allCards.length === 0 ? (
                        <p className='text-gray-500 text-center py-10'>Your cart is empty</p>
                    ) : (
                        <div className='grid grid-cols-1 gap-4 bg-gray-200 rounded-md p-10'>
                            {allCards.map(product => (
                                <Cart key={product.id} product={product} removeFromCart={removeFromCart} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BuyCards;