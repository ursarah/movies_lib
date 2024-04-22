import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  movie: {
    id?: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
  };
  showLink?: boolean;
}

const imageURL = import.meta.env.VITE_IMG;
const MovieCard = ({ movie, showLink = true }: Props) => {
  return (
    <div className='movie-card'>
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
