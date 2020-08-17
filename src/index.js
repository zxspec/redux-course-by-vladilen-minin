import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

let state = 0;

function render() {
  counter.innerText = state.toString();
}

addBtn.addEventListener("click", () => {
  state++;
  render();
});

subBtn.addEventListener("click", () => {
  state--;
  render();
});

asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state = state * 2;
    render();
  }, 3000);
});

themeBtn.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});

render();
