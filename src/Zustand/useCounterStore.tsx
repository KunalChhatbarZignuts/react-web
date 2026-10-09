import { create } from "zustand";

interface couterInterface {
  count: number;
  count1: number;
  incriment: () => void;
  decriment: () => void;
  reset: () => void;
}

export const useCounterStore = create<couterInterface>((set) => ({
  count: 0,
  count1: 0,
  incriment: () => {
    set((state) => ({
      count: state.count + 1,
      count1: state.count1 <= 0 ? (state.count = 0) : state.count1 - 1,
    }));
  },

  decriment: () => {
    set((state) => ({
      count: state.count <= 0 ? (state.count = 0) : state.count - 1,
      count1: (state.count1 = state.count1 + 1),
    }));
  },

  reset: () => {
    set((state) => ({
      count: (state.count = 0),
      count1: (state.count1 = 0),
    }));
  },
}));
