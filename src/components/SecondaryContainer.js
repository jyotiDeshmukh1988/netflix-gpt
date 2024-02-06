import React from "react";
import MovieList from "./movie/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  //console.log(movies);
  return (
    movies && (
      <div className="bg-black px-6 mt-28">
        <div className="-mt-42 sm:-mt-52 lg:-mt-72 lg:px-8 sm:px-4 relative z-20">
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
