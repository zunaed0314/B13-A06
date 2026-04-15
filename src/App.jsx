// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from 'react'
import './App.css'
import BuyCards from './Components/Buycards/BuyCards'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Navbar/Nav'
import Users from './Components/Users/Users'
import GS from './Components/Getstarted/GS'
import Pricing from './Components/Pricing/Pricing'
import Ready from './Components/Ready/Ready'
import Footer from './Components/Footer/Footer'

const dataPromise = fetch('data.json').then(res => res.json());

function App() {

  const [card,setCard] = useState([])

  const addCard = (product) => {
    const newcard = [...card, product];
    setCard(newcard);
    return newcard;
  }


  const getCard = () => {
    return card;
  }

  const clearCart = () => {
    setCard([]);
  }

  const removeFromCart = (productId) => {
    setCard(prevCard => prevCard.filter(item => item.id !== productId));
  };  

  return (
    <div className='bg-white'>
      <Nav cartCount={card.length}></Nav>
      <Hero></Hero>
      <Users></Users>
      <BuyCards 
      addCard={addCard} 
      removeFromCart={removeFromCart}
      dataPromise={dataPromise} 
      getCard={getCard}
      cartItems = {card}
      clearCart = {clearCart}
      />

      <GS dataPromise={dataPromise}></GS>
      <Pricing></Pricing>
      <Ready></Ready>
      <Footer></Footer>
    </div>
  )
}

export default App
