import { useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState<string[]>([]);
  const increment = () => {
    const newCount = count + 1;

    setCount(newCount);

    setList((prevList) => {
      return [...prevList, newCount.toString()];
    });
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    setList((prevList) => prevList.slice(0, -1));
  };
  return [count, list, increment, decrement] as const;
}

export default useCount;
