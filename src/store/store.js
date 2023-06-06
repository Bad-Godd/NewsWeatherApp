import { configureStore } from "@reduxjs/toolkit";

import dateReducer from "./reducers/dateSlice";

export const store = configureStore({
    reducer: {
        date: dateReducer,
    }
})
