let input = document.querySelector(".contact__input");

input.value = "";

document.querySelector(".contact__btn").addEventListener("click", function () {
    if (input.value == "" || !input.value.includes("@")) {
        document.querySelector(".input--wrap").classList.add("error");
        input.classList.add("error");
    } else {
        document.querySelector(".input--wrap").classList.remove("error");
        input.classList.remove("error");
    }
});
