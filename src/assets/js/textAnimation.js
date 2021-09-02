let animatedTitle = document.getElementById("animatedBanner");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let windowHeight = window.innerHeight;
  let stape = scrollY;
  let value = 1 - stape / windowHeight;
  animatedTitle.style.opacity = value;
  if (value <= 0) {
    header.style.opacity = 1;
  } else {
    header.style.opacity = 0;
  }
});
