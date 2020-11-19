/* Author: 

*/

// Hamburger
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav ul");
let backdrop = document.querySelector(".backdrop");
hamburger.addEventListener("click", showNav);
backdrop.addEventListener("click", hideNav);

function showNav() {
  nav.style.transform = "translateX(0)";
  backdrop.style.display = "block";
}

function hideNav() {
  nav.style.transform = "translateX(300px)";
  backdrop.style.display = "none";
}

// Image Slider
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

  size = images[counter].clientWidth;
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

// Video Slider
let videoNext = document.getElementById("video-next");
let videoPrev = document.getElementById("video-prev");

var videoSlider = document.querySelector(".slider-videos");
var videos = document.querySelectorAll(".slider-videos img");

videoNext.addEventListener("click", videoSlideRight);
videoPrev.addEventListener("click", videoSlideLeft);

counter2 = 0;

let size2 = videos[0].clientWidth;

// imageSlider.style.transform = "translateX(" + -size * counter + "px)";

function videoSlideRight(e) {
  e.preventDefault();
  videoSlider.style.transition = "transform .4s ease-in-out";
  counter2++;
  if (counter2 >= videos.length) {
    counter2 = 0;
  }

  size = images[counter2].clientWidth;
  videoSlider.style.transform = "translateX(" + -size2 * counter2 + "px)";
}

function videoSlideLeft(e) {
  e.preventDefault();
  counter2--;
  if (counter2 < 0) {
    counter2 = videos.length - 1;
  }
  videoSlider.style.transition = "transform .4s ease-in-out";
  videoSlider.style.transform = "translateX(" + -size2 * counter2 + "px)";
}

// Play Video
var videoImage = document.querySelector(".slider-videos");
let video = document.querySelector(".testimonial video");
let sliderButtons = document.querySelector(".testimonial .slider-icons");

videoImage.addEventListener("click", playVideo);

function playVideo() {
  let height = videoImage.clientHeight;
  videoImage.style.display = "none";
  sliderButtons.style.display = "none";
  console.log(height);
  video.style.display = "block";
  video.style.height = height + "px";
  video.play();
}
