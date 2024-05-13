import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increasement: (state) => {
      state.value += 1;
    },
    decreasement: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increasement, decreasement, increaseByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
