import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  //console.log(movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-72 px-8 relative z-20">
        <MovieList title={"Now Playing"} mymovies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} mymovies={movies?.nowPopularMovies} />
        <MovieList title={"Top Rated"} mymovies={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} mymovies={movies?.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
