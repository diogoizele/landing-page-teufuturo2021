function sliderImages() {
  const sliderContainer = document.querySelector(".slider-images");
  const img1 = sliderContainer.children[0];
  const img2 = sliderContainer.children[1];
  const img3 = sliderContainer.children[2];
  setInterval(() => {
    img1.style.display = "block";
    img2.style.display = "none";
  }, 1000 * 2);
  setInterval(() => {
    img1.style.display = "none";
    img2.style.display = "block";
  }, 2000 * 2);
}

sliderImages();
