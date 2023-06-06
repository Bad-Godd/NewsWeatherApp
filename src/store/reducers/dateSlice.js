import { createSlice } from '@reduxjs/toolkit'

const dateSlice = createSlice({
    name: 'date',
    initialState: {
        list: {},
    },
    reducers: {
        addDate(state, action) {
            state.list = action.payload;
            state.count = state.list.length;
        }
    }
})

export const { addDate } = dateSlice.actions;

export default dateSlice.reducer;
