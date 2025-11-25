import { imageConfig } from "../config/img";
import { Genre } from "../models";

export interface MovieResult {
    id: number;
    title: string;
    overview: string;
    genres: string[];
    imgUrl: string;
    release_date: string;
}

export interface MovieApiResult extends MovieResult {
    genre_ids: number[];
    poster_path: string;
}


export const getMovieList = async (movies : MovieApiResult[]): Promise<MovieResult[]> => {
    const genres = await Genre.findAll();

    const genreMap: Record<number, string> = {};
    genres.forEach(g => (genreMap[g.id] = g.name));

    const result = movies.map(movie => ({
        ...movie,
        genres: movie.genre_ids.map((id: number) => genreMap[id] || ""),
        imgUrl: movie.poster_path ? imageConfig.baseUrl + imageConfig.size + movie.poster_path : "",
    }));

    return result;
};