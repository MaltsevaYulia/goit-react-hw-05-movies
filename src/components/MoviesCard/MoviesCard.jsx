import { useParams } from 'react-router-dom';
import css from './MoviesCard.module.css';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/getMovies';

const MoviesCard = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
//   console.log('🚀 ~ MoviesCard ~ movieId:', movieId);

    useEffect(() => {
    fetchMovies(`/movie/${movieId}`)
      .then(
        ({ data: { poster_path, title, overview, genres, vote_average } }) => {
          //   console.log('data', data);
          // setMovies(prevMovies => [...prevMovies, ...results]);
          setMovie({ poster_path, title, overview, genres, vote_average });
        }
      )
      .catch(error => {
        console.log(error);
      });

    // return () => {

    // }
    }, []);
    

  return (
    <div className={css.movie}>
      <div className={css.movie__hero}>
        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.movie__img}
        />
      </div>
      <div className={css.movie__content}>
        <div className={css.movie__title}>
          <h1 className={css.heading__primary}>{movie.title}</h1>
        </div>
        <p>User score: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p className={css.movie__description}>{movie.overview}</p>
        <h3>Genres</h3>
        {/* <ul>{movie.genres.map(el => {
                  console.log(el);
                  return <li key={el.id}>{el.name}</li>;
              })}</ul> */}
        <p className={css.movie__detail}>
          gxnghjxghjhkhjkh
          {/* {movie.genres.map(el => {
            return <span>{el.name}</span>;
          })} */}
        </p>
      </div>
    </div>
  );
};
export default MoviesCard;
