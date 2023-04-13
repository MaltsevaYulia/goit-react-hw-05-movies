
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
   const location=useLocation()
  // console.log("🚀 ~ Home ~ location:", location)
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Link state={{from:location}} key={id} to={`/movies/${id}`}>
            <li>{title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
   movies: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};