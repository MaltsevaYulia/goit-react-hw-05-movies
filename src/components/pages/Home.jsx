import MoviesList from 'components/MoviesList/MoviesList';



const Home = ({ movies }) => {
  
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
