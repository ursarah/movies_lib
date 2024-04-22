import axios from "axios";
import { useEffect, useState } from "react";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const useFetchId = (id?: string | null) => {
  const [topMoviesId, setMoviesId] = useState([]);

  const getMovies = async (url: string) => {
    const res = await axios.get(url).then((res) => res.data);
    setMoviesId(res);
  };
  useEffect(() => {
    const url = `${moviesURL}${id}?${apiKey}`;
    getMovies(url);
  }, []);

  return topMoviesId;
};

export default useFetchId;
