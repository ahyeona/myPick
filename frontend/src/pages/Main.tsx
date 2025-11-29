import { useEffect, useState } from 'react'
import { GenreList, Loading, MovieList, SearchBar } from '../components'
import { genreApi, genreMovieApi, keywordApi, popularApi } from '../services/mainApi'
import type { MovieType, GenreType } from '../types'

const Main = () => {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState<GenreType>({ id:0 , name:"" });
  const [genreList, setGenreList] = useState([]);
  const [keywordMovies, setKeywordMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [genreMovies, setGenreMovies] = useState<MovieType[]>([]);

  // popular : 인기 영화, keyword : 검색 결과, genre : 장르 검색결과
  const [mode, setMode] = useState<"popular" | "keyword" | "genre">("popular");
  const [loading, setLoading] = useState(false);

  const getPopularMovies = async () => {
      setLoading(true);
      const { data } = await popularApi();
      setPopularMovies(data.data);
      setMode("popular");
      setLoading(false);
    };

  const getKeywordMovies = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    const { data } = await keywordApi(keyword);
    setKeywordMovies(data.data);
    setMode("keyword");
    setLoading(false);
  };

  const getGenreMovies = async () => {
    if (!genre.id) return;
    setLoading(true);
    const { data } = await genreMovieApi(genre.id);
    setGenreMovies(data.data);
    setMode("genre");
    setLoading(false);
  };

  const getGenres = async () => {
    const { data } = await genreApi();
    setGenreList(data.data.genres);
    console.log("data", data.data.genres);  
  }

  useEffect(()=>{
    getGenres();
    getPopularMovies();
  }, [])

  useEffect(()=>{
    if (!genre.id) return;
    console.log("genre", genre);
    getGenreMovies();
  }, [genre]);

  return (
    <>
      <SearchBar onChange={setKeyword} search={getKeywordMovies}/>
      <GenreList genres={genreList} setGenre={setGenre} />

      {loading && <Loading />}

      {!loading && mode === "popular" && (
        <MovieList caption="인기 영화 목록" movies={popularMovies} />
      )}

      {!loading && mode === "keyword" && (
        <MovieList caption={`${keyword} 검색 결과`} movies={keywordMovies} />
      )}

      {!loading && mode === "genre" && (
        <MovieList caption={`${genre.name} 영화 목록`} movies={genreMovies} />
      )}
    </>
  )
}

export default Main