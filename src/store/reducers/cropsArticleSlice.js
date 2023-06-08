import { createSlice } from "@reduxjs/toolkit";

const cropsArticleSlice = createSlice({
  name: "cropsArticle",
  initialState: {
    article: '',
  },
  reducers: {
    addCropsArticle(state, action) {
      state.article = action.payload;
    },
  },
});

export const { addCropsArticle } = cropsArticleSlice.actions;

export default cropsArticleSlice.reducer;
