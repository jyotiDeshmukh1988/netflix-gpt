import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        nowPopularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
        movieDetail:null,
        movieVideo:null,
    },
    reducers: {
      addNowPlayingMovies: (state, action) => {
        state.nowPlayingMovies = action.payload;
      },
      addNowPopularMovies: (state, action) => {
        state.nowPopularMovies = action.payload;
      },
      addTopRatedMovies: (state, action) => {
        state.topRatedMovies = action.payload;
      },
      addUpcomingMovies: (state, action) => {
        state.upcomingMovies = action.payload;
      },
      addTrailerVideo: (state, action) => {
          state.trailerVideo = action.payload;
      },
      addMovieDetail: (state, action) => {
        state.movieDetail = action.payload;
    },
    addMovieVideo: (state, action) => {
      state.movieVideo = action.payload;
  }
    },
  });

  export const { addNowPlayingMovies,addNowPopularMovies,addTopRatedMovies,addTrailerVideo,addUpcomingMovies,addMovieDetail,addMovieVideo } = moviesSlice.actions;
  export default moviesSlice.reducer;