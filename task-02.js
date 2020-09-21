"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingPick = document.querySelector("#ingredients");
const ingPickOptions = (ing) => {
  return ing.map((ing) => {
    const liEl = document.createElement("li");
    liEl.textContent = ing;
    return liEl;
  });
};
const ulLi = ingPickOptions(ingredients);
ingPick.append(...ulLi);
console.log(ingPick);
