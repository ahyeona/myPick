import type { MovieType, MypickType } from "../../types"
import MovieModal from "../MovieModal/MovieModal"
import { useState } from "react"
import { useAuthStore } from "../../store/authStore"
import { useNavigate } from "react-router-dom"
import { Movie } from "../Movie/Movie"
import { CaptionStyle, MypickListContainer, MypickMovieRow } from "./MypickList.style"

type MypickListProps = {
    mypicks: MypickType[]
    refresh: () => void
}

const MypickList = ({ mypicks, refresh }: MypickListProps) => {
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

    const user = useAuthStore.getState().user;
    const nav = useNavigate();

    const movieClick = (movie: MovieType) => {
        if (!user) {
            nav("/login");
        }
        setSelectedMovie(movie);
    }

    return (
        <>
            <MypickListContainer>
                <CaptionStyle>본 mypick 목록</CaptionStyle>
                <MypickMovieRow>
                    {mypicks
                        .filter(m => m.is_watched)
                        .map(mypick => (
                            <Movie
                                key={mypick.id}
                                movie={mypick.movie}
                                onClick={() => movieClick(mypick.movie)}
                            />
                        ))}
                </MypickMovieRow>
            </MypickListContainer>

            <MypickListContainer>
                <CaptionStyle>볼 mypick 목록</CaptionStyle>
                <MypickMovieRow>
                    {mypicks
                        .filter(m => !m.is_watched)
                        .map(mypick => (
                            <Movie
                                key={mypick.id}
                                movie={mypick.movie}
                                onClick={() => movieClick(mypick.movie)}
                            />
                        ))}
                </MypickMovieRow>
            </MypickListContainer>

            {
                selectedMovie && (
                    <MovieModal refresh={refresh} movie={selectedMovie} onClose={() => { setSelectedMovie(null) }} />
                )
            }
        </>

    )
}

export default MypickList