import type { MovieType } from '../../types'
import { MovieContainer } from './Movie.style'

export const Movie = ({ movie, onClick }: { movie: MovieType, onClick: (movie: MovieType) => void }) => {
  return (
    <MovieContainer onClick={() => { onClick(movie) }}>
      <img src={movie.imgUrl} width={"200px"} />
      <p>{movie.title}</p>
      <div>{movie.genres?.map((genre) => { return <span>{genre}</span> })}</div>
    </MovieContainer>
  )
}
