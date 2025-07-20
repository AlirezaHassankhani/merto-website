declare var gsap: any;
declare var ScrollTrigger: any;

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