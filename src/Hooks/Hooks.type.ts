export type ThemeMode = "light" | "dark" | "brand";

export interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}

export type CartItem = { id: number; name: string; price: number };
export type CartState = { items: CartItem[]; total: number };
export type CartAction =
  | { type: "ADD"; payload: CartItem }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" };
