import type { MovieType, MypickType } from "../../types"
import MovieModal from "../MovieModal/MovieModal"
import { useEffect, useState } from "react"
import { useAuthStore } from "../../store/authStore"
import { useNavigate } from "react-router-dom"
import { Movie } from "../Movie/Movie"
import { CaptionStyle, MypickListContainer } from "./MypickList.style"

const MypickList = ({ mypicks }: { mypicks: MypickType[] }) => {
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);
    // const [selectedMypick, setSelectedMypick] = useState<MypickType | null>(null);

    const user = useAuthStore.getState().user;
    const nav = useNavigate();

    const movieClick = (movie: MovieType) => {
        if (!user) {
            nav("/login");
        }
        setSelectedMovie(movie);
    }

    useEffect(() => {
        console.log(mypicks)
    }, []);


    return (
        <>
            <MypickListContainer>
                <CaptionStyle>{"본 mypick 목록"}</CaptionStyle>
                <div style={{ "display": 'flex' }}>
                    {mypicks.map((mypick: MypickType) => {
                        const { movie } = mypick;
                        if (!mypick.is_watched) { return }
                        return <Movie movie={movie} onClick={(movie) => { movieClick(movie) }} />
                    })}
                </div>
            </MypickListContainer>

            <MypickListContainer>
                <CaptionStyle>{"볼 mypick 목록"}</CaptionStyle>
                <div style={{ "display": 'flex' }}>
                    {mypicks.map((mypick: MypickType) => {
                        if (mypick.is_watched) { return }
                        const { movie } = mypick;
                        return <Movie movie={movie} onClick={(movie) => { movieClick(movie) }} />
                    })}
                </div>
            </MypickListContainer>

            {
                selectedMovie && (
                    <MovieModal movie={selectedMovie} onClose={() => { setSelectedMovie(null) }} />
                )
            }
        </>

    )
}

export default MypickList