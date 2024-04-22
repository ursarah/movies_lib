import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import useFetch from "../../hooks/useFetch";
import "../MovieGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { topMovies } = useFetch(query);

  return (
    <div className='container'>
      <h2 className='title'>
        Resultados para: <span className='query-text'>{query}</span>
      </h2>
      <div className='movies-container'>
        {topMovies === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
