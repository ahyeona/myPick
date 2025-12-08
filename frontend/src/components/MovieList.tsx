import styled from 'styled-components'
import type { MovieType } from '../types'
import { Movie, MovieContainer } from './Movie'
import { useEffect, useState } from 'react'
import MovieModal from './MovieModal'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

const MovieListContainer = styled.div`
    border: 1px solid blue;
    width: 100vw;
    overflow: scroll;

    /* &>div {
        
    } */

    & ${MovieContainer} {
        background-color: aliceblue;
        margin-inline: 20px;
    }
`
const CaptionStyle = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`

const MovieList = ({ movies, caption }: { movies: MovieType[], caption: string }) => {
    const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

    const user = useAuthStore.getState().user;
    const nav = useNavigate();

    const movieClick = (movie: MovieType) => {
        if (!user) {
            nav("/login");
        }
        setSelectedMovie(movie);
    }

    useEffect(() => {
        console.log(movies)
    }, []);

    return (
        <>
            <MovieListContainer>
                <CaptionStyle>{caption}</CaptionStyle>
                <div style={{ "display": 'flex' }}>
                    {movies.map((movie: MovieType) => {
                        return <Movie movie={movie} onClick={(movie) => { movieClick(movie) }} />
                    })}
                </div>
            </MovieListContainer>

            {
                selectedMovie && (
                    <MovieModal movie={selectedMovie} onClose={() => { setSelectedMovie(null) }} />
                )
            }
        </>

    )
}

export default MovieList