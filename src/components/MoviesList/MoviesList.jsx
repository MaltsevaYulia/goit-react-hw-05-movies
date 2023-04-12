
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    // const [movie, setMovie] = useState({})
    // const clickHandler = (e) => {
    //     console.log(e.target);
    // }
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
