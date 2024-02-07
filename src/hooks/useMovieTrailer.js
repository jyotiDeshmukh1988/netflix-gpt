import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
  // fetch trailer video and updating the store
  const getMovieVideos = async () => {
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

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
   !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailor;
