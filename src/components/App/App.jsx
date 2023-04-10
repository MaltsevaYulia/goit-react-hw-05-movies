
import Layout from 'components/Layout/Layout';
import Home from 'components/pages/Home';
import Movies from 'components/pages/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </div>
  );
};
