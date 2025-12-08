export type MovieType = {
    id?: number;
    imgUrl?: string;
    title?: string;
    adult?: boolean;
    genre_ids?: number[];
    genres?: string[];
    original_language?: string;
    original_title?: string;
    overview?: string;
    release_date?: string;
    poster_path?: string;
}

export type GenreType = {
    id?: number;
    name?: string;
}

export type MypickType = {
    id?: number;
    is_watched?: boolean;
    memo?: string;
    movie: MovieType;
}