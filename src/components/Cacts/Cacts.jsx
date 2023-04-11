import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/getMovies';

const Cacts = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([])
  console.log('🚀 ~ Cacts ~ movieId:', movieId);
  useEffect(() => {
    fetchMovies(`/movie/${movieId}/credits`)
      .then(({ data:{cast} }) => {
          console.log('cast', cast);
          setCast([...cast])
      })
      .catch(error => {
        console.log(error);
      });

    // return () => {

    // }
  }, [movieId]);
    return <ul>{cast.map(({ id,character, profile_path, original_name }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
            />
            <h4>original_name</h4>
                <p>Character: {character}</p>
          </li>
        );
    })}</ul>;
};
export default Cacts;
