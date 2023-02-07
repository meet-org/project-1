var swiper = new Swiper(".mySlider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
