// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import BuyCards from './Components/Buycards/BuyCards'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Navbar/Nav'
import Users from './Components/Users/Users'

function App() {

  return (
    <div className='bg-white'>
      <Nav></Nav>
      <Hero></Hero>
      <Users></Users>
      <BuyCards></BuyCards>

    </div>
  )
}

export default App
