import styled from 'styled-components'
import type { MovieType } from '../types'

export const MovieContainer = styled.div`
    border: 1px solid blue;
    width: fit-content;
    cursor: pointer;
`

export const Movie = ({ movie, onClick }: { movie: MovieType, onClick: (movie: MovieType) => void }) => {
  return (
    <MovieContainer onClick={() => { onClick(movie) }}>
      <img src={movie.imgUrl} width={"200px"} />
      <p>{movie.title}</p>
      <div>{movie.genres?.map((genre) => { return <span>{genre}</span> })}</div>
    </MovieContainer>
  )
}
