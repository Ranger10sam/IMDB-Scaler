import React, { useState } from 'react'
import WishlistIcon from './WishlistIcon'


const MovieCard = ({title}) => {
  const [wishlisted, setWishlisted] = useState(false);
    const data = {
        poster : 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=400&q=80',
        title : 'Inception',
        year : '2010',
        genre : 'Sci-Fi'
    }
  return (
    <div className="flex flex-col justify-between w-64 h-96 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-2/3">
        <img
          src={data.poster}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          <WishlistIcon filled={wishlisted} onClick={() => setWishlisted(!wishlisted)} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 h-1/3">
        <h2 className="text-lg font-semibold text-slate-800 truncate">{title}</h2>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{data.year}</span>
          <span className="px-2 py-0.5 bg-slate-100 rounded-full text-xs font-medium">{data.genre}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard