//Slider Constructor
var swiper = new Swiper(".mySlider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/* counter scripts starts */
const countersElem = document.querySelectorAll(".counter");

countersElem.forEach(function (counterElem) {
   let counterNumber = 0;
   let counterType = counterElem.dataset.type;
   let counterTarget = counterElem.dataset.target;

   let counter = setInterval(function () {
      if (counterType === "int") {
         counterNumber++;
         counterElem.innerText = counterNumber + "k";
      } else {
         counterNumber += 0.1;
         counterElem.innerText = counterNumber.toFixed(1);
      }

      if (counterNumber >= counterTarget) {
         clearInterval(counter);
      }
   }, 10);
});
/* counter scripts ends */
