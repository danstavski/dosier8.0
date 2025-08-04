"use strict";

const btnBurger = document.querySelector(".burger-btn");
const mainContainer = document.querySelector(".main-container");
const navTab = document.querySelector(".nav-tab"); // Первое мобильное меню

const header = document.querySelector(".header-video");
const loveMusic = document.querySelector(".love-music");
const topSingers = document.querySelector(".top-singers");
const footer = document.querySelector(".footer");
btnBurger.addEventListener("click", function () {
  btnBurger.classList.toggle("active");
  navTab.classList.toggle("active");
  header.classList.toggle("blur");
  loveMusic.classList.toggle("blur");
  topSingers.classList.toggle("blur");
  footer.classList.toggle("blur");
});
