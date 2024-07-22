import axios from 'axios';
import { useEffect, useState } from 'react';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

interface searchMovies {
    id?: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
}
const useSearch = (query?: string | null) => {
    const [searchMovies, setSearchMovies] = useState<searchMovies[]>([]);

    const url = `${searchURL}?${apiKey}&query=${query}`;

    const getSearchMovies = async (url: string) => {
        const res = await axios.get(url).then((res) => res.data.results);
        setSearchMovies(res);
    };

    useEffect(() => {
        getSearchMovies(url);
    }, [url]);

    return searchMovies;
};

export default useSearch;
