import React from "react";

const Shimmer = () => {
  return (
    <>
    <h1 className="text-2xl text-white text-center">Please search for movie using openAI GPT feature</h1>
    <div className="flex items-center justify-center gap-3 flex-wrap h-screen -mt-36">
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
    </>
    
  );
};

export default Shimmer;
