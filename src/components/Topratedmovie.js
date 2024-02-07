import React, { useState } from "react";
import Header from "./Header";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import useInfiniteScroll from "../hooks/useInfiniteNowPlaying";
import CommonBodyInfiniteScroll from "./CommonBodyInfiniteScroll";

const Topratedmovie = () => {
  const [card, setCard] = useState([]);
  const url = "movie/top_rated?";
  const langKey = useSelector((store) => store?.config?.lang);
  useInfiniteScroll({ setCard, url });
  return (
    <div className="w-screen h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg')] bg-cover bg-center">
      <div className="w-full h-screen bg-gray-900/60">
        <Header />
        <div className="py-22">
       <CommonBodyInfiniteScroll card={card} title={lang[langKey].topRated}/>
        </div>
      </div>
    </div>
  );
};

export default Topratedmovie;
