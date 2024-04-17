import axios from "axios";
import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    await axios.get(url).then((res) => {
      setTopMovies(res.data.results);
    });
  };

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>
      <div className='movie-container'>
        {topMovies === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <p key={movie.id}>{movie.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
