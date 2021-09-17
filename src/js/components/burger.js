const burger = document.querySelector(".burger");
const navLink = document.querySelector(".nav__link");
const menu = document.querySelector(".nav");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("is-visible");
  // body.classList.toggle("dis-scroll");
});

menu.addEventListener("click", () => {
  console.log("asd");
  burger.classList.remove("burger--active");
  menu.classList.remove("is-visible");
  // body.classList.toggle("dis-scroll");
});
