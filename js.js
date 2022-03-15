const nav = document.querySelector(".nav");
const burgerMenu = document.querySelector(".burgerMenu");
const li = document.querySelectorAll("li");


li.forEach((el) => {
    el.addEventListener("click", () => {
        nav.classList.remove('block');
    })
})
burgerMenu.addEventListener("click", () => {
    nav.classList.toggle('block');
})
