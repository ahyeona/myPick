import type { GenreType } from "../../types"
import type { Dispatch, SetStateAction } from "react";
import { GenreContainer } from "./Genre.style";

type GenreProps = {
  genre: GenreType;
  setGenre: Dispatch<SetStateAction<GenreType>> | null;
}

const Genre = ({ genre, setGenre }: GenreProps) => {
  return (
    <GenreContainer onClick={() => { if (setGenre) setGenre(genre) }}>
      {genre.name}
    </GenreContainer>
  )
}

export default Genre