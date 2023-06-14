import { configureStore } from "@reduxjs/toolkit";

import dateReducer from "./reducers/dateSlice";
import cropsArticleReducer from './reducers/cropsArticleSlice';
import geoReducer from './reducers/geoSlice';

export const store = configureStore({
    reducer: {
        date: dateReducer,
        cropsArticle: cropsArticleReducer,
        geo: geoReducer,
    }
})
