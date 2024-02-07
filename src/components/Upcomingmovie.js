import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./movie/MovieList";
import Header from "./Header";
import lang from "../utils/languageConstants";

const Upcomingmovie = () => {
  const upcomingMovie = useSelector((store) => store?.movies?.upcomingMovies);
  const langKey = useSelector((store) => store?.config?.lang);
  return (
    <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')] bg-cover bg-center">
      <div className="w-full h-screen bg-gray-900/60">
        <Header />
        <div className="px-5 py-32">
        <MovieList
          title={lang[langKey].upcoming}
          mymovies={upcomingMovie}
        ></MovieList>
        </div>
      </div>
    </div>
  );
};

export default Upcomingmovie;
