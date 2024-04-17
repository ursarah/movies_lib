import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../MovieGrid.css";
import axios from "axios";
import MovieCard from "../../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    const res = await axios.get(url).then((res) => res.data.results);
    setMovies(res);
  };

  useEffect(() => {
    const datesMovie = `${searchURL}?${apiKey}&query=${query}`;

    getSearchMovies(datesMovie);
  }, [query]);

  return (
    <div className='container'>
      <h2 className='title'>
        Resultados para: <span className='query-text'>{query}</span>
      </h2>
      <div className='movies-container'>
        {movies === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
