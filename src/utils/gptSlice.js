import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
      showGptSearch: false,
      movieNames:null,
      moviesResults:null
    },
    reducers: {
      toggleGptSearchView: (state) => {
        state.showGptSearch = !state.showGptSearch;
        state.movieNames = null;
        state.moviesResults = null;
      },
      addGptMovieResult:(state,action)=>{
        const{movieNames,moviesResults} = action.payload;
        state.movieNames = movieNames;
        state.moviesResults = moviesResults;
      }
    },
  });

  export const { toggleGptSearchView,addGptMovieResult } = gptSlice.actions;
  export default gptSlice.reducer;