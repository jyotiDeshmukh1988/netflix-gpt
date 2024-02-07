import { useDispatch, useSelector } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useDisplayVideo = (movieId) => {
  const dispatch = useDispatch();
  //const movieDetail = useSelector((store)=>store.movies.movieDetail);
  //const { id } = movieDetail;
  // fetch trailer video and updating the store
  const getSingleMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => {
      return video.type === "Trailer";
    });

    const trailer = filterData.length ? filterData[0] : json.results[0];
    //console.log(trailer);

    dispatch(addMovieVideo(trailer));
  };

  useEffect(() => {
   getSingleMovieVideo();
  }, []);
};

export default useDisplayVideo;
