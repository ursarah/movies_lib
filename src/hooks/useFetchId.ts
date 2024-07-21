import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from '../types/types';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const useFetchId = (id?: string | null) => {
    const [topMoviesId, setMoviesId] = useState<Movie>();

    const getMovies = async (url: string) => {
        const res = await axios.get(url).then((res) => res.data);
        setMoviesId(res);
    };
    useEffect(() => {
        const url = `${moviesURL}${id}?${apiKey}`;
        getMovies(url);
    }, [id]);

    return topMoviesId;
};

export default useFetchId;
