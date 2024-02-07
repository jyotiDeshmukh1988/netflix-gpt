import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
      // fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const results = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await results.json();
    //console.log(data.results);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;