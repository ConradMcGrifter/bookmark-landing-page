const body = document.querySelector("body");
const hamburger = document.getElementById("nav__hamburger");
const xBtn = document.querySelector(".x-img");
const hamburgerImg = document.querySelector(".hamburger-img");
const navLinksWrap = document.querySelector(".nav__links--wrap");

const toggleMobileNav = () => {
    navLinksWrap.classList.toggle("active");
    hamburgerImg.style.display = "none";
    xBtn.style.display = "block";
    body.classList.toggle("active");

    if (!navLinksWrap.classList.contains("active")) {
        xBtn.style.display = "none";
        hamburgerImg.style.display = "block";
    }
};

hamburger.addEventListener("click", toggleMobileNav);
