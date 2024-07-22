import { useParams } from 'react-router-dom';
import './Movie.css';
import MovieCard from '../../components/MovieCard';
import {
    BsFillFileEarmarkTextFill,
    BsGraphUp,
    BsHourglassSplit,
    BsWallet2,
} from 'react-icons/bs';
import useFetchId from '../../hooks/useFetchId';

const Movie = () => {
    const { id } = useParams();
    const topMoviesId = useFetchId(id);

    const formatCurrecy = (currency: number | undefined) => {
        return Number(currency).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };
    return (
        <div className="movie-page">
            {topMoviesId && (
                <>
                    <MovieCard
                        movie={topMoviesId}
                        showLink={false}
                    />
                    <p className="tagline">{topMoviesId.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrecy(topMoviesId.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatCurrecy(topMoviesId.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{topMoviesId.runtime} minutos</p>
                    </div>

                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{topMoviesId.overview}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Movie;
