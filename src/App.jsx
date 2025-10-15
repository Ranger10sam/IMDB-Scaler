import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  const [watchlist, setWatchlist] = useState([])

  function handleAddToWatchlist(movieObj){
    let updatedList = [...watchlist, movieObj]
    setWatchlist(updatedList)
    localStorage.setItem('wlmovies', JSON.stringify(updatedList))
  }

  useEffect(()=>{
    const movies = localStorage.getItem('wlmovies')
    setWatchlist(JSON.parse(movies)||[])
  }, [])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist}/>} />
        <Route path='/movies' element={<Movies handleAddToWatchlist={handleAddToWatchlist}/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
      </Routes>
    </BrowserRouter>
      {/* <p className=" font-sans text-red-500 text-center">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
