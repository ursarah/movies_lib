import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import '../MovieGrid.css';
import useSearch from '../../hooks/useSearch';

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const searchMovies = useSearch(query);

    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {searchMovies === null && <p>Carregando...</p>}
                {searchMovies !== null &&
                    Array.isArray(searchMovies) &&
                    searchMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Search;
