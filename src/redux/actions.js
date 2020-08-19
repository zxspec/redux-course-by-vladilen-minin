import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  UPDATING_COUNTER,
  FINISHED_COUNTER_UPDATE,
} from "./types";

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function asyncIncrement() {
  return function (dispatch, getState) {
    dispatch({ type: UPDATING_COUNTER });

    setTimeout(() => {
      dispatch({ type: FINISHED_COUNTER_UPDATE });
      dispatch({ type: INCREMENT });
    }, 2000);
  };
}

export function changeTheme(value) {
  return { type: CHANGE_THEME, value };
}
