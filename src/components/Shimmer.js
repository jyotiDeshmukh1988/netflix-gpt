import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const Shimmer = () => {
  const langKey = useSelector((store) => store?.config?.lang);
  return (
    <>
    <div className="w-full">
    <h1 className="text-2xl text-white text-center mb-3">{lang[langKey].gptShimmerPlaceholder}</h1>
    <div className="sm:pt-[24%] xs:pt-[15%] lg:pt-[5%] pb-10 flex bg-black items-start justify-center gap-3 flex-wrap">
    <div className="card">
      <div className="px-3 py-10">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG media"></div>
      </div>
    </div>
    <div className="card">
      <div className="px-3 py-10">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG media"></div>
      </div>
    </div>
    <div className="card">
      <div className="px-3 py-10">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG media"></div>
      </div>
    </div>
    <div className="card">
      <div className="px-3 py-10">
        <div className="shimmerBG title-line"></div>
        <div className="shimmerBG media"></div>
      </div>
    </div>
    </div>
    </div>
    </>
    
  );
};

export default Shimmer;
