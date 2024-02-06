import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movie/MovieList";
import Shimmer from "../Shimmer";

const GptMovieSuggestions = () => {
  const { movieNames, moviesResults } = useSelector((store) => store.gpt);
  if(!movieNames) return <Shimmer/>;
  return (
    <div className="bg-black w-full h-full flex flex-col bg-opacity-50 pt-8">
      <h1 className="text-white text-xl px-6">Showing results for " <span className="text-red-600 font-semibold">{movieNames.join(", ")}</span> "</h1>
      {movieNames.map((movieName,index)=>{
        return <MovieList key={movieName} title={movieName} mymovies={moviesResults[index]}></MovieList>
      })}
    </div>
  );
};

export default GptMovieSuggestions;
