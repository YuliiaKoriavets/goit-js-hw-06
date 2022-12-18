"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const elementToAdd = [];

  for (let index = 0; index < amount; index++) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * index}px`;
    div.style.height = `${30 + 10 * index}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementToAdd.push(div);
  }
  return elementToAdd;
};

function destroyBoxes() {
  boxEl.textContent = "";
}

createBtnEl.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputEl.value);
  boxEl.append(...boxesToAdd);
});

destroyBtnEl.addEventListener("click", destroyBoxes);
