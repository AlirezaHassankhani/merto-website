declare var gsap: any;
declare var ScrollTrigger: any;
declare var Swiper: any;
declare var SplitText: any;

import { IProduct } from "./type.js";

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

const flashDeals = document.querySelector(".flash-deals");

fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((products) => flashDealsHandler(products));

function flashDealsHandler(products: IProduct[]) {
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.insertAdjacentHTML(
      "beforeend",
      getFlashDealSlideTemplate(product),
    );
    fragment.append(swiperSlide);
  });

  flashDeals?.append(fragment);
}

function getFlashDealSlideTemplate({
  id,
  name,
  price,
  discount,
  src,
}: IProduct) {
  return `
                  <div class="border-b border-r border-primary">
                    <div
                      class="relative flex flex-col gap-1.5 p-2.5 md:p-3 xl:p-5 rounded-md transition-all hover:shadow-xl group/item"
                    >
                      <div>
                        <a href="/product/${id}">
                          <img
                            src="images/products/${src}"
                            alt="product image"
                          />
                        </a>
                      </div>

                      <div>
                        <a
                          href="/product/${id}"
                          class="text-sm font-medium transition-all hover:text-red-600"
                        >
                          ${name}
                        </a>
                      </div>

                      <div class="flex items-center gap-2">
                        <p class="font-semibold">$${(price * (100 - discount)) / 100}</p>

                        <p class="text-sm text-primary-400 line-through">$${price}</p>
                      </div>

                      <div class="flex gap-1">
                        <svg fill="currentColor" class="size-4 text-amber-300">
                          <use href="icons.svg#icon-star"></use>
                        </svg>

                        <svg fill="currentColor" class="size-4 text-amber-300">
                          <use href="icons.svg#icon-star"></use>
                        </svg>

                        <svg fill="currentColor" class="size-4 text-amber-300">
                          <use href="icons.svg#icon-star"></use>
                        </svg>

                        <svg fill="currentColor" class="size-4">
                          <use href="icons.svg#icon-star"></use>
                        </svg>

                        <svg fill="currentColor" class="size-4">
                          <use href="icons.svg#icon-star"></use>
                        </svg>
                      </div>

                      <div
                        class="absolute top-2.5 left-2.5 md:top-3 md:left-3 xl:top-5 xl:left-5 bg-red-600 px-2 rounded-md"
                      >
                        <span class="text-xs text-white font-medium">-${discount}%</span>
                      </div>

                      <div
                        class="transition-all duration-300 group-hover/item:max-h-36 max-h-0 overflow-hidden flex flex-col gap-0.5 absolute top-5 right-5 z-10"
                      >
                        <div
                          class="rounded-md bg-primary-100 p-2 cursor-pointer transition-all hover:bg-black hover:text-white"
                        >
                          <svg
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            width="18"
                            height="18"
                          >
                            <use href="icons.svg#icon-like"></use>
                          </svg>
                        </div>

                        <div
                          class="rounded-md bg-primary-100 p-2 cursor-pointer transition-all hover:bg-black hover:text-white"
                        >
                          <svg
                            fill="none"
                            stroke-width="1.5"
                            stroke="currentColor"
                            width="18"
                            height="18"
                          >
                            <use href="icons.svg#icon-user"></use>
                          </svg>
                        </div>

                        <div
                          class="rounded-md bg-primary-100 p-2 cursor-pointer transition-all hover:bg-black hover:text-white"
                        >
                          <svg
                            x="0px"
                            y="0px"
                            width="18"
                            height="18"
                            fill="currentColor"
                          >
                            <use href="icons.svg#icon-search"></use>
                          </svg>
                        </div>

                        <div
                          class="rounded-md bg-primary-100 p-2 cursor-pointer transition-all hover:bg-black hover:text-white"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            width="18"
                            height="18"
                          >
                            <use href="icons.svg#icon-cart"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
  `;
}
