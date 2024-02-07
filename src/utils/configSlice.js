import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
      lang: "English",
    },
    reducers: {
      changeLanguage: (state,action) => {
        state.lang = action.payload;
      },
      removeLanguage: (state,action) => {
        state.lang = "English"
      }
    },
})

export const { changeLanguage,removeLanguage } = configSlice.actions;

export default configSlice.reducer;