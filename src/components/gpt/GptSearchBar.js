import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openAI";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../utils/store/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const userInput = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // search movie in TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    return json.results;
  };

  const handleGptSearch = async () => {
    if (userInput.current.value.length > 0) {
      //console.log(userInput.current.value);
      // create gptQuery which help gpt how they have to display the results
      const gptQuery =
        "Act as a movie Recommendation system and suggest some movies names for the query " +
        userInput.current.value +
        ". only give me name of 5 movies , comma seperated like the example result given ahead. Example result : Gadar, Sholay, Don, Golmaal, Koi mil gaya";

      // make an API call to GPT API and get movie results
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!gptResults) {
        navigate("/error");
      }

      //console.log(gptResults.choices?.[0]?.message?.content);
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
      //console.log(gptMovies);
      // For each movie I will search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // it return [Promise,Promise,Promise,Promise,Promise]
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, moviesResults: tmdbResults })
      );
    }
  };

  return (
    <div className="w-full pt-[15%] xs:[pt-14%] sm:pt-[15%] flex justify-center items-center">
      <form
        className="bg-black w-full lg:w-1/2 xs:w-full mx-6 sm:w-full mb-5 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-2 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={userInput}
        />
        <button
          className="col-span-3 m-2 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
