import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

const {
  default: AdditionalInfo,
} = require('components/AdditionalInfo/AdditionalInfo');
const { default: MoviesCard } = require('components/MoviesCard/MoviesCard');

const MovieInfo = () => {
  const location = useLocation();
   const backLinkLocationRef = useRef(location.state?.from ?? '/');
  // console.log("🚀 ~ MovieInfo ~ location:", location)
  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <MoviesCard />
      <AdditionalInfo />
      <Outlet />
    </>
  );
};

export default MovieInfo;
