import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
const VideoBackground = ({ movieId }) => {
  const [trailerId,setTrailerId] = useState(null);
  // fetch trailer video
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
    console.log(trailer);
    setTrailerId(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      {/*To display the trailor ID dynamic in the iframe video will use the state variable this is one solution*/}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerId+"?si=6Eb3QI1gyTAb9h-K"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
