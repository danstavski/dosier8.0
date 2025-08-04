"use strict";

const btnBurger = document.querySelector(".burger-btn");
const mainContainer = document.querySelector(".main-container");
const navTab = document.querySelector(".nav-tab"); // Первое мобильное меню

const header = document.querySelector(".header-video");
const descriptionMovies = document.querySelector(".description-movies");
const footer = document.querySelector(".footer");
btnBurger.addEventListener("click", function () {
  btnBurger.classList.toggle("active");
  navTab.classList.toggle("active");
  header.classList.toggle("blur");
  descriptionMovies.classList.toggle("blur");
  footer.classList.toggle("blur");
});
