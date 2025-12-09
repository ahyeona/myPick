import type { GenreType } from "../../types"
import Genre from "../Genre/Genre"
import type { Dispatch, SetStateAction } from "react"
import { GenreListContainer } from "./GenreList.style";

type GenreListProps = {
  genres: GenreType[];
  setGenre: Dispatch<SetStateAction<GenreType>>;
}

const GenreList = ({ genres, setGenre }: GenreListProps) => {
  return (
    <GenreListContainer>
      <div style={{ "display": 'flex' }}>
        {genres.map((genre: GenreType, idx: number) => {
          return <Genre genre={genre} setGenre={setGenre} key={idx} />
        })}
      </div>
    </GenreListContainer>
  )
}

export default GenreList