import MovieInfo from "components/MovieInfo/MovieInfo";
import MoviesList from "components/MoviesList/MoviesList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from 'servises/getMovies';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([])
  
  const query = searchParams.get('query') ?? '';
  console.log("🚀 ~ Filter ~ query:", query)

  const handelChenge = (e) => {
    const searchValue=e.target.value
    if (searchValue === '') {
      return setSearchParams({})
    }
    setSearchParams({ query: searchValue });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ///search/movie
    fetchMovies(`search/movie?query=${query}`)
      .then(({ data: { results } }) => {
        console.log('results', results);
        setMovies([...results])
      })
      .catch(error => {
        console.log(error);
      });

    // return () => {

    // }
 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={handelChenge} />
        <button>Search</button>
      </form>
      {movies.length > 0 && <MoviesList movies={movies} />
      }
    </>
  );
};
export default Filter;





