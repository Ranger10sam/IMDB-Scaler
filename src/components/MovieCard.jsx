import React, { useState } from 'react'
import WishlistIcon from './WishlistIcon'


const MovieCard = ({movieObj, handleAddToWatchlist, watchlist}) => {
  //const [wishlisted, setWishlisted] = useState(false);
    const data = {
        poster : `https://image.tmdb.org/t/p/original/${movieObj.poster_path}`,
        title : movieObj.title,
        year : '2010',
        genre : 'Sci-Fi'
    }

    function handleOnClick(movieObj){
      handleAddToWatchlist(movieObj)
    }

    function doesContain(){
      for(let i=0; i<watchlist.length; i++){
        if(watchlist[i].id === movieObj.id){
          return true;
        }
      }
      return false;
    }

  return (
    <div className="flex flex-col justify-between w-64 h-96 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-2/3">
        <img
        loading='lazy'
          src={data.poster}
          alt={data.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2">
          <button
            type="button"
            className="bg-white/80 rounded-full p-2 shadow-md hover:bg-slate-100 transition-colors"
            onClick={()=>handleOnClick(movieObj)}
          >
          {doesContain() ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-pink-500">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )
            :
            (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            )
          }
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 h-1/3">
        <h2 className="text-lg font-semibold text-slate-800 truncate">{data.title}</h2>
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{data.year}</span>
          <span className="px-2 py-0.5 bg-slate-100 rounded-full text-xs font-medium">{data.genre}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard