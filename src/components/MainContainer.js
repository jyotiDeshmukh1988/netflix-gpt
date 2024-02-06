import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./video/VideoTitle";
import VideoBackground from "./video/VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const mainMovie = movies[0];
  //console.log(mainMovie);
  const {original_title,overview,id} = mainMovie
  return (
    <>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </>
  );
};

export default MainContainer;
