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