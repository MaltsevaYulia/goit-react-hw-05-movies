import {  Outlet } from 'react-router-dom';
import { StyledNavLink, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
