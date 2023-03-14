// import React from "react";

// function CounterOutput(props) {
//   return (
//     <div>
//       <h1>counter:{props.data}</h1>
//     </div>
//   );
// }

// export default CounterOutput;

import React from "react";
import { useSelector } from "react-redux";

function CounterOutput() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>counter:{counter}</h1>
    </div>
  );
}

export default CounterOutput;
