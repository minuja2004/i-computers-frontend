import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import { ProductCard } from './components/productCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './pages/adminPage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import HomePage from './pages/homePage'

function App() {
  return(
  <BrowserRouter>
    <div className="w-full min-h-screen bg-red-500" >
      <Routes >

        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>

      </Routes>
      
    </div>
  </BrowserRouter>
  );

  
}

export default App;
