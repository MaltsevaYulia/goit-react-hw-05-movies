export const moviesMapper = movies => {
  return movies.map(({  id, title }) => ({
    id,
    title,
  }));
};
