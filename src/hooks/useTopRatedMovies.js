import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
      // fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const results = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await results.json();
    //console.log(data.results);
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;