"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
const liArrayEl = [];

ingredients.map((ingredient) => {
  const itemIngredientEl = document.createElement("li");
  itemIngredientEl.classList.add("ingredient__item");
  itemIngredientEl.textContent = ingredient;
  liArrayEl.push(itemIngredientEl);
});

ingredientsListEl.prepend(...liArrayEl);
