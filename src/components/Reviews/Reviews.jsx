import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'servises/getMovies';

const Reviews = () => {
  const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
  console.log('🚀 ~ Reviews ~ movieId:', movieId);
  useEffect(() => {
    fetchMovies(`/movie/${movieId}/reviews`)
      .then(({ data: { results } }) => {
        setReviews([...results]);
      })
      .catch(error => {
        console.log(error);
      });

    // return () => {

    // }
  }, [movieId]);

  //author,content
  return (
   
    <ul>
      {reviews.map(({ id,author,content }) => {
        return (
          <li key={id}>
            <h4>Autor: {author}</h4>
            <p>Character: {content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;
