import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, mymovies }) => {
  //console.log(mymovies);
  return (
    <div className="p-6">
      {title && <h1 className="text-2xl py-3 text-white">{title}</h1>}
      <div className="flex overflow-x-scroll container-snap overflow-y-hidden">
        <div className="flex ">
          {mymovies?.map((movie) => {
            return <MovieCard key={movie?.id} posterPath={movie?.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
