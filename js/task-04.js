"use strict";

let counterValue = 0;

const buttonMinusOneEl = document.querySelector(
  "button[data-action=decrement]"
);
const buttonPlusOneEl = document.querySelector("button[data-action=increment]");
const valueEl = document.querySelector("#value");

buttonMinusOneEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

buttonPlusOneEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
