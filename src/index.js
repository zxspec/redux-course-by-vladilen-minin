import "./styles.css";
import { createStore } from "./create-store";
import { rootReducer } from "./redux/root-reducer";

const store = createStore(rootReducer, 0);

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

addBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

subBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

asyncBtn.addEventListener("click", () => {});

themeBtn.addEventListener("click", () => {});

store.subscribe(() => {
  const state = store.getState();
  counter.innerText = state;
});

store.dispatch({ type: "INIT_APPLICATION" });
