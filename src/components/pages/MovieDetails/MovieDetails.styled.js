import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackLink = styled(Link)`
  color: #212121;
  text-decoration: none;
  padding: 5px;
  display: block;
  border: 1px solid #00000029;
  width: 80px;
  margin-bottom: 15px;
  border-radius: 5px;
`;


export const StyledDiv = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;