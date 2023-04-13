import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'servises/getMovies';

const LS_MOVIES = 'movies';
const Movies = () => {
  // const [movies, setMovies] = useState(() => ([]));
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
 
  const moviesLS = JSON.parse(localStorage.getItem(LS_MOVIES));
  const [movies, setMovies] = useState(() =>
    moviesLS && query ? [...moviesLS] : []
  );

  useEffect(() => {
    localStorage.setItem(LS_MOVIES, JSON.stringify(movies));
  }, [movies, query]);

  const handelChenge = e => {
    const searchValue = e.target.value;
    if (searchValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchValue });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetchMovies(`search/movie?query=${query}`)
      .then(({ data: { results } }) => {
        console.log('results', results);
        setMovies([...results]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handelChenge} />
        <button>Search</button>
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
