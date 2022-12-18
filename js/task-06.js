"use strict";

const textInputEl = document.querySelector("#validation-input");
const lengthEl = Number(textInputEl.getAttribute("data-length"));

const handleBlur = ({ target }) => {
  if (Number(target.value.length) !== lengthEl) {
    textInputEl.classList.add("invalid");
    textInputEl.classList.remove("valid");
  } else {
    textInputEl.classList.add("valid");
    textInputEl.classList.remove("invalid");
  }
};

textInputEl.addEventListener("blur", handleBlur);
