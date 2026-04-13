// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from 'react'
import './App.css'
import BuyCards from './Components/Buycards/BuyCards'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Navbar/Nav'
import Users from './Components/Users/Users'

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
      />
    </div>
  )
}

export default App
