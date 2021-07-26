const images = document.querySelectorAll(".feature-img");
const info = document.querySelectorAll(".info--wrap");
const tabs = document.querySelectorAll(".tab-links");

const tab1 = document.getElementById("simple--btn");
const tab2 = document.getElementById("speedy--btn");
const tab3 = document.getElementById("easy--btn");

// images[0].classList.add("active");
// info[0].classList.add("active");

const toggleTabs = (img, text) => {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
        info[i].classList.remove("active");
    }

    document.getElementById(img).classList.add("active");
    document.getElementById(text).classList.add("active");
};

// const targetTab = () => {
//     for (let i = 0; i < tabs.length; i++) {
//         tabs[i].classList.add("inactive");
//         tabs[i].addEventListener("click", function () {
//             for (let j = 0; j < tabs.length; j++) {
//                 tabs[j].classList.remove("active");
//                 this.classList.add("active");
//             }
//         });
//     }
// };

// function targetTab() {
//     for (let i = 0; i < tabs.length; i++) {
//         tabs[i].classList.remove("active");
//         tabs[i].addEventListener("click", function () {
//             this.classList.add("active");
//         });
//     }
// }

function targetTab(tab) {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        document.getElementById(tab).classList.add("active");
    }
}

toggleTabs("simple-img", "simple-info");

document.querySelector(".default").classList.add("active");

tab1.addEventListener("click", () => {
    targetTab("simple--btn");
    toggleTabs("simple-img", "simple-info");
});

tab2.addEventListener("click", () => {
    targetTab("speedy--btn");
    toggleTabs("speedy-img", "speedy-info");
});

tab3.addEventListener("click", () => {
    targetTab("easy--btn");
    toggleTabs("easy-img", "easy-info");
});
