import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

function Movies({handleAddToWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [randomBanner, setRandomBanner] = useState(1);
  const [bannerUrl, setBannerUrl] = useState(null);

  function pageNext(){
    if(page<maxPage){
      setPage(page+1)
    }
  }

  function pagePrev(){
    if(page>1){
      setPage(page-1)
    }
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`
      );

      setMovies(response.data.results)
      setMaxPage(response.data.total_pages)
    }

    fetchMovies()
  }, [page]);

  useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setBannerUrl(movies[randomIndex].backdrop_path);
    }
  }, [movies]);

   //console.log(movies)

  return (
    <div>
      <Banner bannerUrl={bannerUrl} />
      <div className='flex flex-col gap-12 my-10 mx-8' >
        <h1 className='self-center text-5xl'>Trending Movies</h1>
        <div className='flex flex-wrap justify-center gap-8'>
        {
          movies && movies.map((movie)=>(
            <MovieCard movieObj={movie} watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist}/>
          ))
        }

        </div>
      </div>
      <Pagination nextFn={pageNext} prevFn={pagePrev} pageNo={page} />
    </div>
  )
}

export default Movies;