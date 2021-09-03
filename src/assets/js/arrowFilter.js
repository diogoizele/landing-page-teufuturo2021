setInterval(() => {
  const arrow = document.querySelector(".mobile-arrow");
  arrow.style.filter = "drop-shadow(0 0 1rem #ffcf1a)";
}, 1000 * 2);
setInterval(() => {
  const arrow = document.querySelector(".mobile-arrow");
  arrow.style.filter = "none";
}, 2000 * 2);
