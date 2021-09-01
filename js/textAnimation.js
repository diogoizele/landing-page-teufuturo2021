let animatedTitle = document.getElementById("animatedTitle");
window.addEventListener("scroll", () => {
  let windowHeight = window.innerHeight;
  let stape = scrollY;
  value = 1 - stape / windowHeight;
  animatedTitle.style.opacity = value;
});
