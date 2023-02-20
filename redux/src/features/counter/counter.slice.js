import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state + 1;
        },
        decrement(state, action) {
            return state - 1;
        },
    },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;

export const counterSelector = (state) => state.counter;
