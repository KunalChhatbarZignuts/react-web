interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};
const decrementCount = (count: number): number => {
  if (count <= 0) {
    return 0;
  }

  return count - 1;
};

export const counterReducer = (
  state: CounterState = initialState,
  action: any,
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: decrementCount(state.count),
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
