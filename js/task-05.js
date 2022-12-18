"use strict";

const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", (event) => {
  outputNameEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputNameEl.textContent = "Anonymous";
  }
});
