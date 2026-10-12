import type { CartAction, CartState } from "./Hooks.type";

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD":
      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    case "REMOVE": {
      const itemToRemove = state.items.find((i) => i.id === action.payload);
      return {
        items: state.items.filter((i) => i.id !== action.payload),
        total: state.total - (itemToRemove ? itemToRemove.price : 0),
      };
    }
    case "CLEAR":
      return { items: [], total: 0 };
    default:
      return state;
  }
}
