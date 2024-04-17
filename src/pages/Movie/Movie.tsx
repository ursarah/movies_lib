import { useParams } from "react-router-dom";
import "./Movie.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import {
  BsFillFileEarmarkTextFill,
  BsGraphUp,
  BsHourglassSplit,
  BsWallet2,
} from "react-icons/bs";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await axios.get(url).then((res) => res.data);
    setMovie(res);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  const formatCurrecy = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className='movie-page'>
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <div className='info'>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrecy(movie.budget)}</p>
          </div>
          <div className='info'>
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrecy(movie.revenue)}</p>
          </div>
          <div className='info'>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime}</p>
          </div>

          <div className='info'>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
