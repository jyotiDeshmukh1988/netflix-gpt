import React, { useEffect } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../../utils/constants";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import {addMovieVideo } from "../../utils/store/moviesSlice";

const MovieCard = ({ posterPath, title, desc, movieId }) => {
  const [open, setOpen] = React.useState(false);
  const movieVideo = useSelector((store)=>store?.movies?.movieVideo);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
    //dispatch(addMovieDetail(movieDetail));
  };
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
    open && getSingleMovieVideo();
  }, [open]);
  if (!posterPath) return;
  return (
    <>
      <div className="w-48 md:w-55 pr-6 cursor-pointer">
        <img
          onClick={handleOpen}
          className="rounded-lg"
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
      <Modal isOpen={open} onClose={handleClose}>
        <h1 className="text-2xl font-bold mb-2 text-center">{title}</h1>
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            movieVideo?.key +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            movieVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <p className="mt-2 text-sm">{desc}</p>
      </Modal>
    </>
  );
};

export default MovieCard;
