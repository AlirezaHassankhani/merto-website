declare var gsap: any;
declare var ScrollTrigger: any;
declare var Swiper: any;
declare var SplitText: any;

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".fav-brand-item", {
    scrollTrigger: {
      trigger: ".fav-brand-item",
    },
    scale: "0",
    opacity: "0",
    duration: 1,
  });

  gsap.from(".category", {
    scrollTrigger: {
      trigger: ".category",
    },
    clipPath: "inset(0 50% 0 50%)",
    opacity: "0",
    duration: 1,
    ease: "power2.out",
  });
});


const sliderOne = document.querySelector(".slider-cs-1") as HTMLElement;
const sliderTwo = document.querySelector(".slider-cs-2") as HTMLElement;
const sliderThree = document.querySelector(".slider-cs-3") as HTMLElement;

let observerAnimation = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.registerPlugin(SplitText);
        let split = SplitText.create(".slider-cs-text1", {
          type: "words, chars",
        });
        gsap.from(split.chars, {
          duration: 1,
          x: 100,
          autoAlpha: 0,
          stagger: 0.05,
        });
        gsap.from(".slider-cs-text2", {
          duration: 1,
          rotateX: "90px",
        });
        gsap.from(".slider-cs-text3", {
          duration: 1,
          y: "100px",
          opacity: 0,
        });
        gsap.from(".slider-cs-3-img", {
          y: "300px",
          scale: "1.5",
          opacity: "0",
          duration: 1,
        });
      }
    });
  },
  {
    threshold: 0.5,
  },
);

observerAnimation.observe(sliderOne);
observerAnimation.observe(sliderTwo);
observerAnimation.observe(sliderThree);

const swiperItems = new Swiper(".swiper-items", {
  loop: true,
  dirction: "vertical",
  slidesPerView: 2,

  navigation: {
    nextEl: "#swiper-button-next",
    prevEl: "#swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
    },

    800: {
      slidesPerView: 4,
    },

    1100: {
      slidesPerView: 5,
    },
  },
});

const swiperBrands = new Swiper(".swiper-brands", {
  loop: true,
  dirction: "vertical",
  slidesPerView: 2,

  breakpoints: {
    470: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 4,
    },

    910: {
      slidesPerView: 6,
    },
  },
});

const swiperProduct = new Swiper(".swiper-product", {
  slidesPerView: 1,
  loop: true,
  dirction: "vertical",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
  },
});
