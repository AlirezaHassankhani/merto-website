"use strict";
const $ = document;
const computerMenuWrapper = $.querySelector("#computer-menu-wrapper");
const computerMenu = $.querySelector("#computer-menu");
const navMenuComputer = $.querySelector("#nav-menu-computer");
const mobileMenu = $.querySelector("#mobile-menu");
const menuComputerBar = $.querySelector("#menu-computer-bar");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navMenuComputer.dataset.isOpen = "true";
            computerMenu.dataset.isFloat = "false";
            mobileMenu.dataset.isMenu = "false";
        }
        else {
            navMenuComputer.dataset.isOpen = "false";
            computerMenu.dataset.isFloat = "true";
            mobileMenu.dataset.isMenu = "true";
        }
    });
});
observer.observe(computerMenuWrapper);
menuComputerBar.addEventListener("click", () => {
    if (navMenuComputer.dataset.isOpen == "true") {
        navMenuComputer.dataset.isOpen = "false";
    }
    else {
        navMenuComputer.dataset.isOpen = "true";
    }
});
