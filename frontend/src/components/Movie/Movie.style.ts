import styled from 'styled-components'

export const MovieContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;

  align-items: center;

  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.navBg};
  color : ${({ theme }) => theme.buttonText};

  & img {
    width: 220px;
    height: 300px;
  }

  & p {
    font-weight: bold;
  }

  & span {
    margin: 6px;
    font-style: italic;
  }
`;