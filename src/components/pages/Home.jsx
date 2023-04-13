import MoviesList from 'components/MoviesList/MoviesList';
import { moviesMapper } from '../helper/MoviesMapper';
import { fetchMovies } from 'servises/getMovies';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('trending/movie/day')
      .then(({ data: { results } }) => {
        setMovies(moviesMapper(results));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;


