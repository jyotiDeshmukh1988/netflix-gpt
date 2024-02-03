import { useEffect } from "react";
import { addNowPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useNowPopularMovies = () => {
      // fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPopularMovies = useSelector((store)=> store.movies.nowPopularMovies);
  const getNowPopularMovies = async () => {
    const results = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await results.json();
    //console.log(data.results);
    dispatch(addNowPopularMovies(data.results));
  };

  useEffect(() => {
   !nowPopularMovies && getNowPopularMovies();
  }, []);
};

export default useNowPopularMovies;