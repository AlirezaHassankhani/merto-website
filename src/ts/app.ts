const $ = document;

const overlay = $.querySelector(".Overlay");

const computerMenuWrapper = $.querySelector(
  "#computer-menu-wrapper"
) as HTMLElement;
const computerMenu = $.querySelector("#computer-menu") as HTMLElement;
const mobileMenu = $.querySelector("#mobile-menu");
const navMenuComputer = $.querySelector("#nav-menu-computer") as HTMLElement;
const navMobileMenu = $.querySelector("#nav-mobile-menu");

const menuComputerBtn = $.querySelector("#menu-computer-btn");
const mobileMenuBtn = $.querySelector("#mobile-menu-btn");
const mobileCloseBtn = $.querySelector("#mobile-close-btn");

const loginBtn = $.querySelector(".login-btn");
const loginModule = $.querySelector("#login-module");
const closeLoginBtn = $.querySelector("#close-login-btn");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navMenuComputer.dataset.isSub = "true";
      computerMenu.dataset.isFloat = "false";

      if (navMobileMenu instanceof HTMLElement) {
        navMobileMenu.dataset.isMenu = "false";
      }
    } else {
      navMenuComputer.dataset.isSub = "false";
      computerMenu.dataset.isFloat = "true";
      if (navMobileMenu instanceof HTMLElement) {
        navMobileMenu.dataset.isMenu = "true";
      }
    }
  });
});
observer.observe(computerMenuWrapper);

const overlayOpen = () => {
  if(overlay instanceof HTMLElement) {
    overlay.classList.remove("hidden");
  }
}

const overlayClose = () => {
  overlay?.classList.add("hidden");
  const openElement = $.querySelector("[data-is-open=true]");
  if (openElement instanceof HTMLElement) {
    openElement.dataset.isOpen = "false";
  }
}

overlay?.addEventListener("click", overlayClose);

menuComputerBtn?.addEventListener("click", () => {
  if (navMenuComputer.dataset.isSub == "true") {
    navMenuComputer.dataset.isSub = "false";
  } else {
    navMenuComputer.dataset.isSub = "true";
  }
});

mobileMenuBtn?.addEventListener("click", () => {
  if(mobileMenu instanceof HTMLElement) {
    mobileMenu.dataset.isOpen = "true"
    overlayOpen()
  }
})

mobileCloseBtn?.addEventListener("click", overlayClose)

loginBtn?.addEventListener("click", () => {
  overlayOpen();
  if(loginModule instanceof HTMLElement) {
    loginModule.dataset.isOpen = "true";
  }
})

closeLoginBtn?.addEventListener("click", overlayClose);
