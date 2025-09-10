import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Movies/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
      </Routes>
    </BrowserRouter>
      <p className=" font-sans text-red-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
