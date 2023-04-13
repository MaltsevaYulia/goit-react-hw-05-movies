import {  Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';
import { StyledBackLink, StyledDiv } from './MovieInfo.styled';

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
      <StyledBackLink to={backLinkLocationRef.current}>
        <StyledDiv>
          {<MdKeyboardBackspace />}
          <span>Go back</span>
        </StyledDiv>
      </StyledBackLink>
      <MoviesCard />
      <AdditionalInfo />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
