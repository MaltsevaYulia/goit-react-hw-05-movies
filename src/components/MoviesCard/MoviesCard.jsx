import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/getMovies';
import {
  DivMovie,
  DivHero,
  MovieImg,
  DivContent,
  UlGenres,
  StyledP,
} from './MoviesCard.styled';

const MoviesCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  //   console.log('🚀 ~ MoviesCard ~ movieId:', movieId);

  useEffect(() => {
    fetchMovies(`/movie/${movieId}`)
      .then(
        ({ data: { poster_path, title, overview, genres, vote_average } }) => {
          setMovie({ poster_path, title, overview, vote_average });
          setGenres([...genres]);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <DivMovie>
      <DivHero>
        <MovieImg
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </DivHero>
      <DivContent>
        <h1>{movie.title}</h1>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        {/* <p>User score: {movie.vote_average}</p> */}
        <h2>Overview</h2>
        <StyledP>{movie.overview}</StyledP>
        <h3>Genres</h3>
        <UlGenres>
          {genres.map(el => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </UlGenres>
      </DivContent>
    </DivMovie>
  );
};
export default MoviesCard;
