export interface topMoviesId {}

export interface Props {
    movie: {
        id?: number;
        title?: string;
        poster_path?: string;
        vote_average?: number;
        tagline?: string;
        budget?: number;
        revenue?: number;
        runtime?: number;
        overview?: string;
    };
    showLink?: boolean;
}
export interface Movie {
    id?: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
    tagline?: string;
    budget?: number;
    revenue?: number;
    runtime?: number;
    overview?: string;
}

export interface topMovies {
    id?: number;
    title?: string;
    poster_path?: string;
    vote_average?: number;
}
