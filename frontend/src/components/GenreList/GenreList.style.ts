import styled from "styled-components"
import { GenreContainer } from "../Genre/Genre.style"

export const GenreListContainer = styled.div`
  overflow-x : scroll;
  display: flex;

  & ${GenreContainer} {
    min-width: 80px;
    margin-inline: 4px;
  }
`