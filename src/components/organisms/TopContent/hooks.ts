import { useState, useCallback } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  console.log("----------rendering----------");
  const handleIncrement = () => {
    console.log("----------Count rendering----------");
    return setCount(count + 1);
  };
  const handleDecrement = useCallback(() => {
    console.log("----------Count rendering----------");
    return setCount(count - 1);
  }, [count]);
  const resetCount = useCallback(() => {
    console.log("----------execute resetCount----------");
    return setCount(0);
  }, []);

  return { count, handleIncrement, handleDecrement, resetCount };
};
