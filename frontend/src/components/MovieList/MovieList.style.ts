import styled from 'styled-components'
import { MovieContainer } from '../Movie/Movie.style'

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 20px;

  & ${MovieContainer} {
  }
`;

export const CaptionStyle = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: ${({ theme }) => theme.buttonText};
`