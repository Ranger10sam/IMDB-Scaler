import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'
import axios from 'axios'

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      );

      setMovies(response.data.results)
     
    }

    fetchMovies()
  }, []);

   console.log(movies)

  return (
    <div>
      <Banner/>
      <div className='flex flex-col gap-12 my-10 mx-8' >
        <h1 className='self-center text-5xl'>Trending Movies</h1>
        <div className='flex flex-wrap justify-center gap-8'>
        {
          movies && movies.map((movie)=>(
            <MovieCard title={movie.title}/>
          ))
        }

        </div>
      </div>
    </div>
  )
}

export default Movies;