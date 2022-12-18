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
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
};

buttonEl.addEventListener("click", handleChangeColor);
