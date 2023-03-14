// import React from "react";

// function CounterButton(props) {
//   return (
//     <div>
//       <button onClick={props.handleIncrement}>Increment</button>
//       <button onClick={props.handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default CounterButton;

import React from "react";
import { useDispatch } from "react-redux";

function CounterButton() {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterButton;
