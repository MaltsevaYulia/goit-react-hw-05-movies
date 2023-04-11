
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
    // const [movie, setMovie] = useState({})
    // const clickHandler = (e) => {
    //     console.log(e.target);
    // }
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Link movies={movies} key={id} to={`/movies/${id}`}>
            <li>{title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MoviesList;
