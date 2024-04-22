import axios from "axios";
import { useEffect, useState } from "react";
import { Movies } from "../types/types";

const moviesURL = import.meta.env.VITE_API;
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function useFetch(query?: string | null): Movies[] | null {
  const [topMovies, setMovies] = useState<Movies[] | null>(null);

  const getMovies = async (url: string) => {
    const res = await axios.get(url).then((res) => res.data.results);

    setMovies(res);
  };

  useEffect(() => {
    let url = "";
    if (query) {
      url = `${searchURL}?${apiKey}&query=${query}`;
    } else {
      url = `${moviesURL}top_rated?${apiKey}`;
    }
    getMovies(url);
  }, [query]);

  return topMovies;
}

export default useFetch;
