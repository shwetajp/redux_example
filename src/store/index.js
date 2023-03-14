import { createStore } from "redux";
//initial state
const initialState = {
  counter: 10,
};

//create reducer
const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

//creating store
const store = createStore(createReducer);
export default store;
