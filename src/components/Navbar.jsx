import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow-md sticky rounded-b-2xl z-50">
      <div className="flex justify-between items-center w-full px-6 py-4">
        <img className="w-32" src={logo} alt="Logo" />
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to='/' className="text-slate-700 hover:text-pink-600 font-medium transition-colors">Home</Link>
          <Link to='/watchlist' className="text-slate-700 hover:text-pink-600 font-medium transition-colors">Watchlist</Link>
          <Link to='/movies' className="text-slate-700 hover:text-pink-600 font-medium transition-colors">Movies</Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-slate-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-slate-700">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ${menuOpen ? 'max-h-40 py-4' : 'max-h-0 overflow-hidden py-0'}`}>
        <div className="flex flex-col gap-4 px-6">
          <Link to='/' className="text-slate-700 hover:text-pink-600 font-medium transition-colors">Home</Link>
          <Link to='/watchlist' className="text-slate-700 hover:text-pink-600 font-medium transition-colors">Watchlist</Link>
          <Link to='/movies' className="text-slate-700 hover:text-pink-600 font-medium transition-colors">Movies</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar