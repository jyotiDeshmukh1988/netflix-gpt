import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <GptSearch/>
      <MainContainer/>
      <SecondaryContainer />
      {/*
          MainContainer
            - VideoBackground 
            - VideoTitle
          SecondaryContainer
            - MovieList * n
            - Cards * n
      */}
    </div>
  );
};

export default Browse;
