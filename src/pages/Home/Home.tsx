import MovieCard from "../../components/MovieCard";
import useFetch from "../../hooks/useFetch";
import "../MovieGrid.css";

const Home = () => {
  const topMovies = useFetch();

  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>
      <div className='movies-container'>
        {topMovies !== null && Array.isArray(topMovies) ? (
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
