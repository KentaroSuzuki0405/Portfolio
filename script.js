var mySwiper01 = new Swiper ('.swiper-container01', {
  effect: 'slide',
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 2000,
      reverseDirection: false,
      disableOnInteraction: false,
  }
})
var mySwiper02 = new Swiper ('.swiper-container02', {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 2000,
      reverseDirection: true,
      disableOnInteraction: false,
  }
})