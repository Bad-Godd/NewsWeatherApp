import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    date: 0,
    day: '',
    month: '',
    fullday: '',
    fullmonth: '',
  },
  reducers: {
    addDate(state, action) {
      const {type, payload} = action;
      state.date = payload.date;
      let day = payload.day;
      let month = payload.month;
      
      switch (day) {
        case 0:
          state.day = "Sun";
          break;
        case 1:
          state.day = "Mon";
          break;
        case 2:
          state.day = "Tue";
          break;
        case 3:
          state.day = "Wed";
          break;
        case 4:
          state.day = "Thur";
          break;
        case 5:
          state.day = "Fri";
          break;
        case 6:
          state.day = "Sat";
          break;
        default:
          state.day = "Day";
      }

      switch (day) {
        case 0:
          state.fullday = "Sunday";
          break;
        case 1:
            state.fullday = "Monday";
          break;
        case 2:
            state.fullday = "Tuesday";
          break;
        case 3:
            state.fullday = "Wednesday";
          break;
        case 4:
            state.fullday = "Thursday";
          break;
        case 5:
            state.fullday = "Friday";
          break;
        case 6:
            state.fullday = "Saturday";
          break;
        default:
            state.fullday = "Day";
      }

      switch (month) {
        case 0:
          state.month = "Jan";
          break;
        case 1:
          state.month = "Feb";
          break;
        case 2:
          state.month = "Mar";
          break;
        case 3:
          state.month = "Apr";
          break;
        case 4:
          state.month = "May";
          break;
        case 5:
          state.month = "Jun";
          break;
        case 6:
          state.month = "Jul";
          break;
        case 7:
          state.month = "Aug";
          break;
        case 8:
          state.month = "Sep";
          break;
        case 9:
          state.month = "Oct";
          break;
        case 10:
          state.month = "Nov";
          break;
        case 11:
          state.month = "Dec";
          break;
        default:
          state.month = "Month";
      }

      switch (month) {
        case 0:
          state.fullmonth = "January";
          break;
        case 1:
          state.fullmonth = "February";
          break;
        case 2:
          state.fullmonth = "March";
          break;
        case 3:
          state.fullmonth = "April";
          break;
        case 4:
          state.fullmonth = "May";
          break;
        case 5:
          state.fullmonth = "June";
          break;
        case 6:
          state.fullmonth = "July";
          break;
        case 7:
          state.fullmonth = "August";
          break;
        case 8:
          state.fullmonth = "September";
          break;
        case 9:
          state.fullmonth = "October";
          break;
        case 10:
          state.fullmonth = "November";
          break;
        case 11:
          state.fullmonth = "December";
          break;
        default:
          state.fullmonth = "Month";
      }
    },
  },
});

export const { addDate } = dateSlice.actions;

export default dateSlice.reducer;
