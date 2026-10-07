import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

export const couterReduxStore = createStore(counterReducer);
