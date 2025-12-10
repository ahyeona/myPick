import { useEffect, useState } from 'react'
import { Button, GenreList, Loading, MovieList, SearchBar } from '../components'
import { genreApi, genreMovieApi, keywordApi, popularApi } from '../services/mainApi'
import type { MovieType, GenreType } from '../types'
// import { MovieListDummy } from '../dummy/MovieList'
// import { GenreListDummy } from '../dummy/GenreList'
// import { loginApi } from '../services/authApi'

const Main = () => {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState<GenreType>({ id: 0, name: "" });
  const [genreList, setGenreList] = useState([]);
  const [keywordMovies, setKeywordMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [genreMovies, setGenreMovies] = useState<MovieType[]>([]);

  const [popularPage, setPopularPage] = useState(1);
  const [keywordPage, setKeywordPage] = useState(1);
  const [genrePage, setGenrePage] = useState(1);

  // popular : 인기 영화, keyword : 검색 결과, genre : 장르 검색결과
  const [mode, setMode] = useState<"popular" | "keyword" | "genre">("popular");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getPopularMovies = async (pageNo: number) => {
    setLoading(true);
    const { data } = await popularApi(pageNo);
    if (pageNo === 1) {
      setPopularMovies(data.data);
    } else {
      setPopularMovies([...popularMovies, ...data.data]);
    }

    console.log("sdfsdfs", data.data.length);

    if (data.data.length === 0) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setMode("popular");
    setLoading(false);
  };

  const getKeywordMovies = async (pageNo: number) => {
    if (!keyword.trim()) return;
    setLoading(true);
    const { data } = await keywordApi(keyword, pageNo);

    if (pageNo === 1) {
      setKeywordMovies(data.data);
    } else {
      setKeywordMovies([...keywordMovies, ...data.data]);
    }

    if (data.data.length === 0) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setMode("keyword");
    setLoading(false);
  };

  const getGenreMovies = async (pageNo: number) => {
    if (!genre.id) return;
    setLoading(true);
    const { data } = await genreMovieApi(genre.id, pageNo);

    if (pageNo === 1) {
      setGenreMovies(data.data);
    } else {
      setGenreMovies([...genreMovies, ...data.data]);
    }

    if (data.data.length === 0) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    setMode("genre");
    setLoading(false);
  };

  const getGenres = async () => {
    const { data } = await genreApi();
    setGenreList(data.data.genres);
  }

  const loadMore = () => {
    const pageNo = mode === "popular" ? popularPage + 1 : mode === "keyword" ? keywordPage + 1 : genrePage + 1;

    if (mode === "popular") {
      getPopularMovies(pageNo);
      setPopularPage(pageNo);
      setGenrePage(1);
      setKeywordPage(1);
    }
    if (mode === "keyword") {
      getKeywordMovies(pageNo);
      setKeywordPage(pageNo);
      setGenrePage(1);
      setPopularPage(1);
    }
    if (mode === "genre") {
      getGenreMovies(pageNo);
      setGenrePage(pageNo);
      setPopularPage(1);
      setKeywordPage(1);
    }
  }

  useEffect(() => {
    setLoading(true);
    getGenres();
    getPopularMovies(popularPage);
  }, [])

  useEffect(() => {
    if (!genre.id) return;
    console.log("genre", genre);
    getGenreMovies(1);
  }, [genre]);

  return (
    <>
      <SearchBar onChange={setKeyword} search={() => { getKeywordMovies(1) }} />
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

      {!loading && hasMore && (
        <Button onClick={loadMore} text='더보기' />
      )}

      {!loading && !hasMore && (
        <p>목록의 끝입니다.</p>
      )}
    </>
  )
}

export default Main