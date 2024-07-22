import axios from 'axios';
import { useEffect, useState } from 'react';
import { topMovies } from '../types/types';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function useFetch() {
    const [topMovies, setTopMovies] = useState<topMovies[]>([]);
    const url = `${moviesURL}top_rated?${apiKey}`;

    const getTopMovies = async (url: string) => {
        const res = await axios.get(url).then((res) => res.data.results);
        setTopMovies(res);
    };

    useEffect(() => {
        getTopMovies(url);
    }, [url]);

    return topMovies;
}

export default useFetch;
