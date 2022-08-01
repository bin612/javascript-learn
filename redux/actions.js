import { actionCreator } from "./redux";
import { INCREASE, DECREASE, RESET } from "./action-Type";

export const increase = actionCreator(INCREASE);
export const decrease = actionCreator(DECREASE);
export const reset = actionCreator(RESET);