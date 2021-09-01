let fruits = document.getElementById("fruitsIcon");
let salad = document.getElementById("saladIcon");
let topFruit, topSalad;

setInterval(() => {
  topFruit = topFruit === "40%" ? "20%" : "40%";
  fruits.style.top = topFruit;

  topSalad = topSalad === "50%" ? "70%" : "50%";
  salad.style.top = topSalad;
}, 2000);
