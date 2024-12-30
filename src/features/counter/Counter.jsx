import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

export const Counter = () => {
  const count = useSelector < Number > ((state) => state.Counter.count);
  console.log(count);
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch([]);
  return (
    <>
      <p>Counter</p>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
};
