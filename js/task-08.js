"use strict";

const formEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userInformation = { email: email.value, password: password.value };
  console.log(userInformation);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", handleSubmit);
