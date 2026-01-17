import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/productCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCard name="laptop" price="10,0000"  image="https://picsum.photos/id/1/200/300"/>

      <ProductCard name="watch" price="40,5000"  image="https://picsum.photos/id/5/200/300"/>

      <ProductCard name="phone" price="10,1500"  image="https://picsum.photos/id/4/200/300"/>
    </>
  )
}

export default App
