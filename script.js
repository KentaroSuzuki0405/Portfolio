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

// introスクロール
const itemWrapper = document.querySelector('.side-scroll__itemOuter');
const itemInner = document.querySelector('.top-intro__inner');

gsap.to(itemInner, {
x: () => -(itemInner.clientWidth - itemWrapper.clientWidth),
ease: 'none',
scrollTrigger: {
    trigger: '.side-scroll__section', 
    start: 'top top',
    end: () => `+=${itemInner.clientWidth - itemWrapper.clientWidth}`,
    // markers: true,
    scrub: true, 
    pin: true,  
    invalidateOnRefresh: true, 
    anticipatePin: 1.5, 
},
});

