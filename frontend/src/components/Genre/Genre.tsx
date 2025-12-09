import type { GenreType } from "../../types"
import type { Dispatch, SetStateAction } from "react";
import { GenreContainer } from "./Genre.style";

type GenreProps = {
  genre: GenreType;
  setGenre: Dispatch<SetStateAction<GenreType>>;
}

const Genre = ({ genre, setGenre }: GenreProps) => {
  return (
    <GenreContainer onClick={() => { setGenre(genre) }}>
      {genre.name}
    </GenreContainer>
  )
}

export default Genre