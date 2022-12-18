"use strict";

const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ` + categoriesEl.length);

for (const categoryEl of categoriesEl) {
  const categoryTitle = categoryEl.querySelector("h2");
  const categoryList = categoryTitle.nextElementSibling;
  const categoryListEl = categoryList.children;
  console.log(`Category:` + categoryTitle.textContent);
  console.log(`Elements: ` + categoryListEl.length);
}
