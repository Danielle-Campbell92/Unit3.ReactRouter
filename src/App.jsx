import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Yellow from './components/Yellow'

function App() {
  

  return (
    <>
     <div id="container">
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue/>}/>
          <Route path='/red' element={<Red/>}/>
          <Route path='/yellow' element={<Yellow/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    <nav>
     <div id="navbar" style={{display:"flex", justifyContent:"space-between", backgroundColor: 'black'}}>
        <Link to="/blue">Blue</Link>
        <Link to="/red" className='redButton'>Red</Link>
        <Link to="/yellow" className='yellowButton'>Yellow</Link>
        <Link to="/home" className='homeButton'>Home</Link>
      </div> 
    </nav>
    </div> 
    </>
  )
}

export default App
