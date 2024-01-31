import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store)=>{
      return store.movies?.trailerVideo;
  })
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
    getMovieVideos();
  }, []);
  return (
    <div>
      {/*To display the trailor ID dynamic in the iframe video 
      will use the redux store to store the trailer ID in 
      the movieSlice this is second solution*/}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=6Eb3QI1gyTAb9h-K"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
