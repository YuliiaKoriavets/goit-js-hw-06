"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");

const handleChangeColor = (event) => {
  let randomColor = getRandomHexColor()
  bodyEl.style.backgroundColor = randomColor;
  colorTextEl.textContent = randomColor;
};

buttonEl.addEventListener("click", handleChangeColor);
