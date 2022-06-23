import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue : 0 },
  reducers: {
    increment: (state) => {
      state.counterValue++;
    },
    decrement: (state) => {
      state.counterValue--;
    },
    raiseToPower: (state, action) => {
      state.counterValue = state.counterValue ** action.payload;
    },
    reset: (state) => {
      state.counterValue = 0;
    },
  },
});

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer},
});

export const counterActions = counterSlice.actions;

export default counterStore;
