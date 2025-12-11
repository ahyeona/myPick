
import styled from "styled-components"

export const GenreContainer = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.buttonText};
  border-radius: 20px;
  cursor: pointer;
  padding-inline: 10px;
  padding-block: 2px;
`