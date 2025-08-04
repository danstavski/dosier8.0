"use strict";
// меню
const btn = document.querySelector(".navigation__links_modal");

const modal = document.querySelector(".navigation__modal-box");
const header = document.querySelector(".header");
const acquaintance = document.querySelector(".acquaintance");
const technologies = document.querySelector(".technologies");
const photo = document.querySelector(".photo");
const footer = document.querySelector(".footer");

const boxBtn = document.querySelector(".navigation__modal-box-btn");

const textModal = document.querySelector(".text_modal");

const textModal1 = document.querySelector(".text_modal-1");

const textModal2 = document.querySelector(".text_modal-2");

const mainContainer = document.querySelector(".main-container");

btn.addEventListener("click", function () {
  modal.classList.add("open");

  header.classList.add("blur");
  acquaintance.classList.add("blur");
  technologies.classList.add("blur");
  photo.classList.add("blur");
  footer.classList.add("blur");
});

boxBtn.addEventListener("click", function () {
  modal.classList.remove("open");

  header.classList.remove("blur");
  acquaintance.classList.remove("blur");
  technologies.classList.remove("blur");
  photo.classList.remove("blur");
  footer.classList.remove("blur");
});

textModal.addEventListener("click", function () {
  modal.classList.remove("open");
  header.classList.remove("blur");
  acquaintance.classList.remove("blur");
  technologies.classList.remove("blur");
  photo.classList.remove("blur");
  footer.classList.remove("blur");
});

textModal1.addEventListener("click", function () {
  modal.classList.remove("open");
  header.classList.remove("blur");
  acquaintance.classList.remove("blur");
  technologies.classList.remove("blur");
  photo.classList.remove("blur");
  footer.classList.remove("blur");
});

textModal2.addEventListener("click", function () {
  modal.classList.remove("open");
  header.classList.remove("blur");
  acquaintance.classList.remove("blur");
  technologies.classList.remove("blur");
  photo.classList.remove("blur");
  footer.classList.remove("blur");
});

const btnBurger = document.querySelector(".burger-btn");
const navTab = document.querySelector(".nav-tab");
const tabCross = document.querySelector(".navigation-tab__modal-box-btn"); // крест
const navtabMain = document.querySelector(".nav-tab__btn"); //Главное
const navigationTab = document.querySelector(".navigation-tab"); // меню
const navigationTabCross = document.querySelector(
  ".navigation-tab__modal-box-btn"
); // крест второго nav

// Нажимаем на бургер меню
btnBurger.addEventListener("click", function () {
  btnBurger.classList.toggle("active");
  navTab.classList.toggle("active");
  navigationTab.classList.remove("active-nav-tab");
  header.classList.toggle("blur");
  acquaintance.classList.toggle("blur");
  technologies.classList.toggle("blur");
  photo.classList.toggle("blur");
  footer.classList.toggle("blur");
});

// Нажимаем на главное
navtabMain.addEventListener("click", function () {
  navigationTab.classList.add("active-nav-tab");
  navTab.classList.remove("active");
  btnBurger.disabled = true;
  btnBurger.classList.add("disable");
});
// Нажимаем на крест второго nav
navigationTabCross.addEventListener("click", function () {
  navigationTab.classList.remove("active-nav-tab");
  navTab.classList.add("active");
  btnBurger.disabled = false;
  btnBurger.classList.remove("disable");
});

const links = document.querySelectorAll(".navigation-tab__links");

links.forEach((links) => {
  links.addEventListener("click", function () {
    btnBurger.classList.toggle("active");
    navigationTab.classList.remove("active-nav-tab");
    header.classList.toggle("blur");
    acquaintance.classList.toggle("blur");
    technologies.classList.toggle("blur");
    photo.classList.toggle("blur");
    footer.classList.toggle("blur");
    btnBurger.disabled = false;
    btnBurger.classList.remove("disable");
  });
});
