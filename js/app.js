"use strict";
const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");
const mobileMenu = document.querySelector("#mobile-menu");
window.addEventListener("scroll", () => {
    if (window.scrollY > 550) {
        menu.dataset.isMenu = "true";
        navMenu.dataset.isOpen = "false";
        mobileMenu.dataset.isMenu = "true";
    }
    else {
        menu.dataset.isMenu = "false";
        navMenu.dataset.isOpen = "true";
        mobileMenu.dataset.isMenu = "false";
    }
});
