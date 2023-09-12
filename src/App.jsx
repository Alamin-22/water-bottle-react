import { useState } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'
import Header from './Components/Header/Header'
import { useEffect } from 'react'
import { addToLS, getStoredCart, removeFromLS } from './Utiliets/localstorage'
import Cart from './Cart/Cart'

function App() {
  const [bottles, setBottles] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json")
      .then(res => res.json())
      .then(data => setBottles(data))
  }, [])

  // load cart from local storage
  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles)
      const savedcart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id);
        if (bottle) {
          savedcart.push(bottle)
        }
      }

      console.log("saved Cart", savedcart)
      setCart(savedcart)
    }

  }, [bottles])

  const handleAddToCart = bottle => {
    const newcart = [...cart, bottle];
    setCart(newcart)
    addToLS(bottle.id);

  }
  const handleCartToRemove = id => {
        // visual remove
        const remainingCart= cart.filter(bottle=> bottle.id !== id)
        setCart(remainingCart);
        // remove from local storage
        removeFromLS(id)
  }
  return (
    <>
      <Header></Header>
      <h2>Bottle Available: {bottles.length}</h2>
      <Cart cart={cart} handleCartToRemove={handleCartToRemove}></Cart>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 '>
        {
          bottles.map(bottle => <Bottles key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} ></Bottles>)
        }
      </div>

    </>
  )
}

export default App
