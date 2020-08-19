import "./styles.css";
// import { createStore } from "./create-store";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./redux/root-reducer";
import {
  increment,
  decrement,
  asyncIncrement,
  changeTheme,
} from "./redux/actions";

// const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger));
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  /* preloadedState, */ compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");
const body = document.querySelector("body");

// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log("### prevState: ", state.getState());
//       console.log("### action: ", action);
//       const newState = next(action);
//       console.log("### newState: ", state.getState());

//       return newState;
//     };
//   };
// }

addBtn.addEventListener("click", () => {
  store.dispatch(increment());
});

subBtn.addEventListener("click", () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener("click", () => {
  const currentTheme = store.getState().theme;
  if (currentTheme.value === "light") {
    store.dispatch(changeTheme("dark"));
  } else {
    store.dispatch(changeTheme("light"));
  }
});

store.subscribe(() => {
  const state = store.getState();

  counter.innerText = state.counter.value;

  body.classList.remove("light", "dark");
  body.classList.add(state.theme.value);

  [addBtn, subBtn, themeBtn, asyncBtn].forEach(
    (btn) => (btn.disabled = state.counter.isUpdating)
  );
});

store.dispatch({ type: "INIT_APPLICATION" });
