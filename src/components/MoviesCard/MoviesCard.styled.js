import styled from 'styled-components';

// export const AppDiv = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;
// `;

export const DivMovie = styled.div`
  max-width: 800px;
  border-radius: 5px;
  display: flex;
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const DivHero = styled.div`
  flex: 0 0 45%;
`;
export const MovieImg = styled.img`
  width: 100%;
  display: block;
`;

export const DivContent = styled.div`
  background-color: #fff;
  flex: 1;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
`;

export const UlGenres = styled.ul`
  // max-width: 800px;
  // border-radius: 5px;
  display: flex;
  list-style: none;
  gap: 15px;
  padding-left: 0;
  // box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.2);
  // overflow: hidden;
`;
