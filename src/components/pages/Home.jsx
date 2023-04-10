import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
          <h1>Trending today</h1>
          <ul><li>Movies list</li></ul>
    </div>
  );
};

export default Home;
