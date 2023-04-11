// import MoviesCard from 'components/MoviesCard/MoviesCard';
// import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import Layout from 'components/Layout/Layout';
import Home from 'components/pages/Home';
import Movies from 'components/pages/Movies';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/getMovies';

import { Route, Routes } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(({ data: { results } }) => {
        // setMovies(prevMovies => [...prevMovies, ...results]);
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });

    // return () => {

    // }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <>
                <MovieInfo />
              </>
            }
          >
            <Route
              path="casts"
              element={<div>Это будет комплнент casts</div>}
            />
            <Route
              path="reviews"
              element={<div>Это будет комплнент Reviews</div>}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
