"use strict";
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navMenuComputer.dataset.isOpen = "true";
            computerMenu.dataset.isFloat = "false";
            if (navMobileMenu instanceof HTMLElement) {
                navMobileMenu.dataset.isMenu = "false";
            }
        }
        else {
            navMenuComputer.dataset.isOpen = "false";
            computerMenu.dataset.isFloat = "true";
            if (navMobileMenu instanceof HTMLElement) {
                navMobileMenu.dataset.isMenu = "true";
            }
        }
    });
});
observer.observe(computerMenuWrapper);
