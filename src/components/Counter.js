import React, { useState } from "react";
import CounterButton from "./CounterButton";
import CounterOutput from "./CounterOutput";

function Counter() {
  //   const [count, setCount] = useState(10);
  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     setCount(count - 1);
  //   };
  return (
    <div>
      <CounterButton />
      <CounterOutput />
      {/* <h2>Counter Page</h2> */}
      {/* <CounterButton handleIncrement={increment} handleDecrement={decrement} />
      <CounterOutput data={count} /> */}
    </div>
  );
}

export default Counter;
