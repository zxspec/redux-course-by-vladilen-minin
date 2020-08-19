import { combineReducers } from "redux";
import {
  INCREMENT,
  DECREMENT,
  UPDATING_COUNTER,
  FINISHED_COUNTER_UPDATE,
} from "./types";

const initialCounter = {
  value: 0,
  isUpdating: false,
};
function counterReducer(state = initialCounter, action) {
  const prevValue = state.value;

  if (action.type === INCREMENT) {
    return { ...state, value: prevValue + 1 };
  } else if (action.type === DECREMENT) {
    return { ...state, value: prevValue - 1 };
  } else if (action.type === UPDATING_COUNTER) {
    return { ...state, isUpdating: true };
  } else if (action.type === FINISHED_COUNTER_UPDATE) {
    return { ...state, isUpdating: false };
  }

  return state;
}

const initialTheme = { value: "light" };

function themeReducer(prevState = initialTheme, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...prevState, value: action.value };
    default:
      return prevState;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
