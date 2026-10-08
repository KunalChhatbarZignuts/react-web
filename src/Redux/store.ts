import { createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const couterReduxStore = createStore(counterReducer);
