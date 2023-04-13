import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { StyledNavLink, Nav, Main } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
