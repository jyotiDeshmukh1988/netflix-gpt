import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async() => {
    const results = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    const data = await results.json();
    console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
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
