import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Routes } from 'react-router-dom'
import Contect from './pages/Contect'
import Nevbar from './components/Nevbar'
import Product from './pages/Product'


const App = () => {
  return (
    <div>
      
      <Nevbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
      
    </div>
  )
}

export default App
