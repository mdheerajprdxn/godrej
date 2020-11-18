/* Author: 

*/

let leftSlide = document.querySelector("#left-slide");
let rightSlide = document.querySelector("#right-slide");

var imageSlider = document.querySelector(".slider-images");
var images = document.querySelectorAll(".slider-images img");

rightSlide.addEventListener("click", slideRight);
leftSlide.addEventListener("click", slideLeft);

counter = 0;

let size = images[0].clientWidth;

// imageSlider.style.transform = "translateX(" + -size * counter + "px)";

function slideRight(e) {
  e.preventDefault();
  imageSlider.style.transition = "transform .4s ease-in-out";
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  imageSlider.style.transform = "translateX(" + -size * counter + "px)";
}

function slideLeft(e) {
  e.preventDefault();
  console.log(counter);
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  imageSlider.style.transition = "transform .4s ease-in-out";
  imageSlider.style.transform = "translateX(" + -size * counter + "px)";
}

var videoImage = document.querySelector(".slider-videos img");
let video = document.querySelector(".testimonial video");

videoImage.addEventListener("click", playVideo);

function playVideo() {
  let height = videoImage.clientHeight;
  videoImage.style.display = "none";
  console.log(height);
  video.style.display = "block";
  video.style.height = height + "px";
  video.play();
}
