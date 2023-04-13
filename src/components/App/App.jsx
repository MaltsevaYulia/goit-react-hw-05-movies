import Layout from 'components/Layout/Layout';
// import Home from 'components/pages/Home';
// import Movies from 'components/pages/Movies';
// import MovieInfo from 'components/pages/MovieInfo/MovieInfo';
// import Cacts from 'components/Cacts/Cacts';
// import Reviews from 'components/Reviews/Reviews';

import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/getMovies';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieInfo = lazy(() => import('../pages/MovieInfo/MovieInfo'));
const Cacts = lazy(() => import('../Cacts/Cacts'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies('trending/movie/day')
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="casts" element={<Cacts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
