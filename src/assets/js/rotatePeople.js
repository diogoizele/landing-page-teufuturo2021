let images = document.querySelectorAll(".people-image");
let img1 = images[0];
let img2 = images[1];
let img3 = images[2];
let aux = 180;


setInterval(() => {
  aux = aux == 180 ? 0 : 180;
  img1.style.transform = `rotate3d(0, 1, 0, ${aux}deg)`;
  img1.style.transition = "3s";
  img2.style.transform = `rotate3d(0, 1, 0, ${aux}deg)`;
  img2.style.transition = "3s";
  img3.style.transform = `rotate3d(0, 1, 0, ${aux}deg)`;
  img3.style.transition = "3s";
}, 10000);
