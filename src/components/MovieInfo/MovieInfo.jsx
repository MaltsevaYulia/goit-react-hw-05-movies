import { Outlet } from 'react-router-dom';

const {
  default: AdditionalInfo,
} = require('components/AdditionalInfo/AdditionalInfo');
const { default: MoviesCard } = require('components/MoviesCard/MoviesCard');

const MovieInfo = () => {
  return (
    <>
      <MoviesCard />
      <AdditionalInfo />
      <Outlet />
    </>
  );
};

export default MovieInfo;
