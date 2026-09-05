import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import PageNotFound from './pages/PageNotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Nav2'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>

      {/*Static Routing*/}
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/courses' element={<Courses/>} />

      {/*this is dynamic routing  for using use /: and write anything it show courseDetail page*/}
      <Route path='/courses/:id'  element={<CourseDetail/>} />  

      {/*Static Routing*/}
      <Route path='/contact' element={<Contact/>} />

      {/*Nested Routing*/}
      <Route path='/product' element={<Product/>}> 
        <Route path='men' element={<Men/>} />         {/*Nested Route*/}
        <Route path='women' element={<Women/>} />     {/*Nested Route*/}
        <Route path='kids' element={<Kids/>} />       {/*Nested Route*/}
        
      </Route>  {/*For nested routing it has to be in clossing tag */}
      
      {/*Its for wrong route shows 404 not found page*/}
      <Route path='*' element={<PageNotFound/>} />
      </Routes>


      <Footer/>
    </div>
  
  )
}

export default App
