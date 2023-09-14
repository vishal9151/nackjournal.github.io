const carousel = document.querySelector(".carousel-container");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const images = document.querySelectorAll(".carousel-image");
  const totalImages = images.length;
  const imageWidth = images[0].getBoundingClientRect().width;


// Function to move to the next slide

let currentIndex = 0;
let prevIndex;

// Function to move to the next slide
function nextSlide() {
  console.log("in next slide");
  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Function to move to the previous slide
function prevSlide() {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Function to update the carousel display
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Automatically change slides every 2 seconds
setInterval(nextSlide, 2000);

// Add event listeners for left and right arrow buttons
leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

// Your original code below
const navigators = document.querySelectorAll(".navigators div");
const carouselNav = document.querySelector(".section1-container");

navigators.forEach((navigator, index) => {
  navigator.addEventListener("click", () => {
    navigators.forEach((navigator) => {
      navigator.classList.remove("active");
    });
    navigator.classList.add("active");
    carouselNav.style.transform = `translateX(-${window.innerWidth * index}px)`;
  });
});

const ham = document.querySelectorAll(".ham")[0];
const icons = document.querySelectorAll(".ham i");
const hamMenu = document.querySelectorAll(".ham-menu")[0];
const body = document.querySelector("body");

ham.addEventListener("click", () => {
  hamMenu.classList.toggle("ham-active");

  if (body.style.overflowY === "hidden") {
    body.style.overflowY = "scroll";
  } else {
    body.style.overflowY = "hidden";
  }

  icons.forEach((icon) => {
    icon.classList.toggle("active");
  });
});

var navMenuAnchorTags = document.querySelectorAll('#nav1 p a');
console.log(navMenuAnchorTags);
var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener('click', function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    console.log(this.textContent);
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);

    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 20);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}
