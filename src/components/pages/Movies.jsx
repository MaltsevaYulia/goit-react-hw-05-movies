import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'servises/getMovies';

const LS_MOVIES = 'movies';
const Movies = () => {
  const moviesLS = JSON.parse(localStorage.getItem(LS_MOVIES));
  const [movies, setMovies] = useState(() => (moviesLS ? [...moviesLS] : []));
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  // useEffect(() => {
  //   localStorage.setItem(LS_MOVIES, JSON.stringify(movies));

  //   return () => {
  //     console.log('🚀 ~ return ~ query:', query);
  //     console.log('🚀 ~ return ~ movies:', movies);
  //     if (movies.length > 0 && query === '') {
  //       console.log('Єто устовие очистки сторедж', query);
  //       localStorage.removeItem(LS_MOVIES);
  //       return;
  //     }
  //   };
  // }, [movies, query]);

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
