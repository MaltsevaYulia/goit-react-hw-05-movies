import css from './MoviesCard.module.css'
import {  useState, useParams, useEffect } from 'react';
import { fetchMovies } from 'servises/getMovies';

const MoviesCard = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState({});
    console.log("🚀 ~ MoviesCard ~ movieId:", movieId)

    // useEffect(() => {
    //   fetchMovies()
    //     .then(({ data: { results } }) => {
    //       // setMovies(prevMovies => [...prevMovies, ...results]);
    //       setMovie(results);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });

    //   // return () => {

    //   // }
    // }, []);
    
    return (
      <div className={css.movie}>
        <div className={css.movie__hero}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
            alt="Rambo"
            className={css.movie__img}
          />
        </div>
        <div className={css.movie__content}>
          <div className={css.movie__title}>
            <h1 className={css.heading__primary}>Title</h1>
          </div>
          <p>User score:</p>
          <h2>Overview</h2>
          <p className={css.movie__description}>
            First Blood is a 1982 American action film directed by Ted Kotcheff,
            and co-written by Sylvester Stallone, who also stars as Vietnam War
            veteran John Rambo.
          </p>
          <h3>Genres</h3>
          <p className={css.movie__detail}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            iae quod.
          </p>
        </div>
        
      </div>
    );
};
export default MoviesCard;
