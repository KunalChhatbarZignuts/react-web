import { createContext, useContext, useState, type ReactNode } from "react";

interface contextCountType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

interface CountProviderProps {
  children: ReactNode;
}

const contextCount = createContext<contextCountType | undefined>(undefined);

export const CountProvider = ({ children }: CountProviderProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <contextCount.Provider
      value={{
        count,
        increment,
        decrement,
        reset,
      }}
    >
      {children}
    </contextCount.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(contextCount);

  if (!context) {
    throw new Error("useCounter must be used inside CountProvider");
  }

  return context;
};
