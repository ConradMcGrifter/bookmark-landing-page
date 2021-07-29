let input = document.querySelector(".contact__input");
let icon = document.querySelector(".error-img");
let inputWrap = document.querySelector(".input--wrap");
let contactBtn = document.querySelector(".contact__btn");

input.value = "";

document.querySelector(".contact__btn").addEventListener("click", function () {
    if (input.value == "" || !input.value.includes("@")) {
        inputWrap.classList.add("error");
        input.classList.add("error");
        icon.classList.add("active");
        contactBtn.classList.add("mobile-active");
    } else {
        inputWrap.classList.remove("error");
        input.classList.remove("error");
        icon.classList.remove("active");
        contactBtn.classList.remove("mobile-active");
    }
});
