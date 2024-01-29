import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async() => {
    const results = await fetch("https://api.themoviedb.org/3/movie/now_playing&page=1",API_OPTIONS);
    const data = await results.json();
    console.log(data);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
