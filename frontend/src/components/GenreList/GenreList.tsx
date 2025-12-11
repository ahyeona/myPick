import type { GenreType } from "../../types"
import Genre from "../Genre/Genre"
import type { Dispatch, SetStateAction } from "react"
import { GenreListContainer } from "./GenreList.style";

type GenreListProps = {
  genres: GenreType[];
  setGenre: Dispatch<SetStateAction<GenreType>> | null;
}

const GenreList = ({ genres, setGenre }: GenreListProps) => {
  return (
    <GenreListContainer>
      {genres.map((genre: GenreType, idx: number) => {
        return <Genre genre={genre} setGenre={setGenre} key={idx} />
      })}
    </GenreListContainer>
  )
}

export default GenreList