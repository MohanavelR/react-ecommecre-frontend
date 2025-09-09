import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Navbar from './Components/Home/Navbar'
import Home from './Components/Home/Home'
import Shopping from './Components/Home/Shopping'
import Login from './Components/Login/Login'
import MyCart from './Components/Home/MyCart'
import Details from './Components/Home/Details'

function App() {
  

  return (
  <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Shopping/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/mycart' element={<MyCart/>}/>
    <Route path='/details/:id' element={<Details/>}/>
  </Routes>
  </BrowserRouter>  
  </>
  )
}

export default App
