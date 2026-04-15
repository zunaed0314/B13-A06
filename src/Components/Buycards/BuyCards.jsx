import React, { use, useState } from 'react';
import Cards from './Cards';
import Cart from './Cart';
import { ShoppingCart } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyCards = ({ addCard, removeFromCart, dataPromise, getCard, cartItems, clearCart }) => {
    const [cartCount, setcartCount] = useState(0);
    const [showProducts, setShowProducts] = useState(true);
    const [allCards, setAllCards] = useState([]);

    const updateCardCount = (count) => {
        setcartCount(count);
    }

    const cardStatus = (status) => {
        setShowProducts(status);
        if (status === false) {
            const cards = getCard();
            setAllCards(cards);
        }
    }

    const handleRemoveFromCart = (productId) => {
        const updatedCards = allCards.filter(item => item.id !== productId);
        setAllCards(updatedCards);
        removeFromCart(productId);
        updateCardCount(cartCount - 1);
    }

    const total = allCards.reduce((sum, product) => sum + product.price, 0);

    const data = use(dataPromise);

    return (
        <div>
            <div className=' px-5 sm:px-13 md:px-17 lg:px-20 flex flex-col gap-4 justify-center items-center w-full  py-5 sm:py-8 md:py-10 lg:py-16 mt-8 sm:mt-10 md:mt-15'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold text-center'>
                    Premium Digital Tools
                </p>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 font-[500] text-center w-full sm:w-3/4 lg:w-2/3 xl:w-200'>
                    Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.
                </p>
                <div className='flex gap-2 p-2 rounded-full bg-gray-100 shadow-md'>
                    <button className={`btn border-none shadow-sm text-black rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 ${showProducts ? 'bg-purple-600 text-white' : 'bg-white'} `} onClick={() => cardStatus(true)}>
                        Products
                    </button>
                    <button className={`btn border-none shadow-sm text-black rounded-full text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 ${showProducts ? 'bg-white' : 'bg-purple-600 text-white'} `} onClick={() => cardStatus(false)}>
                        Cart({cartCount})
                        {/* {
                            cardCount > 0 ? (
                                <span>({cardCount})</span>
                            ) : (
                                <p></p>
                            )
                        } */}
                    </button>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full ${showProducts ? 'block' : 'hidden'}`}>
                    {data.map(product => (
                        <Cards key={product.id}
                            product={product}
                            addCard={addCard}
                            removeFromCart={removeFromCart}
                            updateCardCount={updateCardCount}
                            cartItems={cartItems} />
                    ))}
                </div>

                <div className={`p-4 sm:p-6 w-full bg-white shadow-md ring-3 rounded-md flex flex-col justify-center ${!showProducts ? 'block' : 'hidden'}`}>
                    <p className='text-xl sm:text-2xl font-bold text-black mb-4'>Your Cart</p>
                    {allCards.length === 0 ? (
                        <div className='flex flex-col justify-center items-center'>
                            <ShoppingCart color='gray' className=' w-10 sm:w-12 md:w-20 h-10 sm:h-12 md:h-20 mx-auto' />
                            <p className='text-gray-500 text-center text-xl py-3'>Your cart is empty</p>
                        </div>

                    ) : (
                        <div className='grid grid-cols-1 gap-4 rounded-md'>
                            {allCards.map(product => (
                                <Cart key={product.id}
                                    product={product}
                                    onRemove={handleRemoveFromCart}
                                />
                            ))}
                        </div>
                    )}

                    <div className='mt-4 pt-4 border-t border-gray-200'>
                        <div className='flex justify-between items-center mb-4 px-2'>
                            <p className='text-2xl font-semibold text-gray-700'>Total:</p>
                            <p className='text-2xl font-bold text-black'>${total.toFixed(2)}</p>
                        </div>
                    </div>

                    {
                        allCards.length > 0 && (
                            <button className='btn bg-purple-600 text-white rounded-full py-3 mt-2 hover:bg-purple-700' onClick={() => {
                                clearCart()
                                setAllCards([])
                                setcartCount(0)
                                toast.info("Cart cleared successfully!")
                            }}>Proceed To Checkout</button>
                        )
                    }

                </div>
            </div>

        </div>
    );
};

export default BuyCards;