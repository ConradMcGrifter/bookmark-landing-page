const body = document.querySelector("body");
const hamburger = document.getElementById("nav__hamburger");
const hamburgerImg = document.querySelector(".hamburger-img");
const navLinksWrap = document.querySelector(".nav__links--wrap");

const toggleMobileNav = () => {
    navLinksWrap.classList.toggle("active");
    hamburgerImg.src = "../images/icon-close.svg";
    body.classList.toggle("active");

    if (!navLinksWrap.classList.contains("active")) {
        hamburgerImg.src = "../images/icon-hamburger.svg";
    }
};

hamburger.addEventListener("click", toggleMobileNav);
