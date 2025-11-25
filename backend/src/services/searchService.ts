import axios from "axios";
import { getMovieList } from "./movieService";

export const searchService = async (keyword: string) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko&page=1`;
    const { data } = await axios.get(url, {
        headers : {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`
        }
    });
    const list = getMovieList(data.results);
    return list;
}

export const popularSearchService = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';
    const { data } = await axios.get(url, {
        headers : {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`
        }
    });
    const list = getMovieList(data.results);
    return list;
}

// 장르별영화
export const genreSearchService = async (genres: string) => {
    // , : and
    // - : or  (id 숫자로)
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=${genres}`;
    const { data } = await axios.get(url, {
        headers : {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`
        }
    });
    const list = getMovieList(data.results);
    return list;
}

// 장르 리스트
export const genreListService = async () => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ko';
    const { data } = await axios.get(url, {
        headers : {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`
        }
    });
    return data;
}

export const imgConfigService = async () => {
    const url = 'https://api.themoviedb.org/3/configuration';
    const { data } = await axios.get(url, {
        headers : {
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`
        }
    });
    return data;
}

