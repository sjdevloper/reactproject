import { DECREASE_COUNTER, INCREASE_COUNTER } from "./cunter.actionTypes";

let increaseCounter = () => {
  return {
    type: INCREASE_COUNTER,
    payload: "increase",
  };
};

let decreaseCounter = () => {
  return {
    type: DECREASE_COUNTER,
    payload: "decrease",
  };
};

export { increaseCounter, decreaseCounter };
