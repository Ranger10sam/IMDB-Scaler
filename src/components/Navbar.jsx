import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
    <div className='justify-items-center mt-4'>
      <div className='flex justify-between w-3/4 px-6 py-4 bg-amber-100 border-1 border-amber-500 rounded-2xl'>
          <img className='w-32' src={logo} />
          <div className='flex gap-4 items-center'>
              <Link to='/'>Home</Link>
              <Link to='/watchlist'>Watchlist</Link>
              <Link to='/movies'>Movielist</Link>
          </div>
      </div>
    </div>
    </>
  )
}

export default Navbar