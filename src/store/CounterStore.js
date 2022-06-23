import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    case "RAISE_TO_POWER":
      return {
        counter: state.counter ** action.payload,
      };
    case "RESET":
      return {
        counter: 0,
      };
    default:
      return state;
  }
};

const counterStore = createStore(counterReducer);

export default counterStore;
