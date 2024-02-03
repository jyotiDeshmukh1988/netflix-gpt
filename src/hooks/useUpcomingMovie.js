import { useEffect } from "react";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
      // fetch the data from TMDB API and update store
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const results = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await results.json();
    //console.log(data.results);
    dispatch(addUpcomingMovies(data.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;