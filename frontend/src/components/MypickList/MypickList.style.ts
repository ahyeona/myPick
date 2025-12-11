import styled from "styled-components";
import { MovieContainer } from "../Movie/Movie.style";

export const MypickListContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MypickMovieRow = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }

  & > div {
    flex-shrink: 0;
  }

  & ${MovieContainer} {
    width: 220px;
  }
`;

export const CaptionStyle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.buttonText};
`;
