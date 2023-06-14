import { createSlice } from "@reduxjs/toolkit";

const geoSlice = createSlice({
  name: "geo",
  initialState: {
    lat: 0,
    lon: 0
  },
  reducers: {
    addGeo(state, action) {
      const {type, payload} = action;
      state.lat = payload.lat;
      state.lon = payload.lon;
    },
  },
});



export const { addGeo } = geoSlice.actions;

export default geoSlice.reducer;