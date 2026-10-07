import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const countSlice = createSlice({
  name: "Couter",
  initialState,
  reducers: {
    incriment: (state) => {
      state.count += 1;
    },
    decriment: (state) => {
      if (state.count <= 0) {
        state.count = 0;
      } else state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { incriment, decriment, reset } = countSlice.actions;
export default countSlice.reducer;
