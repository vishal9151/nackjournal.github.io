const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");

const totalImages = Object.keys(images).length;


const imageWidth = images[0].getBoundingClientRect().width + 40;
// const imageWidth = 450;
console.log("getbounding1", images[1].getBoundingClientRect());

leftArrow.addEventListener("click", () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  carousel.style.transform = `translateX(-${imageWidth}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);

  setTimeout(() => {
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
  }, 490);
});

rightArrow.addEventListener("click", () => {
  carousel.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;

  carousel.style.transform = `translateX(-${imageWidth}px)`;

  setTimeout(() => {
    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transform = "";
  }, 500);
});



const navigators = document.querySelectorAll(".navigators div");
const carouselNav = document.querySelector(".section1-container");

navigators.forEach((navigator, index) => {
  navigator.addEventListener("click", () => {
    navigators.forEach((navigator) => {
      navigator.classList.remove("active");
    });
    navigator.classList.add("active");
    carouselNav.style.transform = `translateX(-${window.innerWidth* index}px)`;
  });
});



const ham = document.querySelectorAll(".ham")[0];
const icons = document.querySelectorAll(".ham i");
const hamMenu = document.querySelectorAll(".ham-menu")[0];
const body = document.querySelector("body");

ham.addEventListener("click", () => {
  hamMenu.classList.toggle("ham-active");
  
  if(body.style.overflowY === "hidden"){
    body.style.overflowY = "scroll";
  }else{
    body.style.overflowY = "hidden";
  }

  icons.forEach((icon) => {
    icon.classList.toggle("active");
  });
  
});


var navMenuAnchorTags = document.querySelectorAll('#nav1 p a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

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
