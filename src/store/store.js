import { configureStore } from "@reduxjs/toolkit";

import dateReducer from "./reducers/dateSlice";
import cropsArticleReducer from './reducers/cropsArticleSlice';

export const store = configureStore({
    reducer: {
        date: dateReducer,
        cropsArticle: cropsArticleReducer,
    }
})
