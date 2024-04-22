export interface Movies {
  topMovies: {
    id?: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
  }[];
}

export interface topMoviesId {
  tagline?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  overview?: string;
}
