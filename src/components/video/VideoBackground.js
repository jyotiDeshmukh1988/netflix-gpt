import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => {
    return store.movies?.trailerVideo;
  });

  // create custom hook for getting the trailer video from the redux store
  useMovieTrailor(movieId);

  return (
    <div className="w-full">
      {/*To display the trailor ID dynamic in the iframe video 
      will use the redux store to store the trailer ID in 
      the movieSlice this is second solution*/}
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
