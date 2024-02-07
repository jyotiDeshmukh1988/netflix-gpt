import React from "react";
import MovieList from "./movie/MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  //console.log(movies);
  const langKey = useSelector((store) => store?.config?.lang);
  console.log(langKey);
  return (
    movies && (
      <div className="bg-black px-6 mt-28">
        <div className="-mt-42 sm:-mt-52 lg:-mt-72 lg:px-8 sm:px-4 relative z-20">
        <MovieList title={lang[langKey].nowPlaying} mymovies={movies?.nowPlayingMovies} />
        <MovieList title={lang[langKey].popularMovies} mymovies={movies?.nowPopularMovies} />
        <MovieList title={lang[langKey].topRated} mymovies={movies?.topRatedMovies} />
        <MovieList title={lang[langKey].upcoming} mymovies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
