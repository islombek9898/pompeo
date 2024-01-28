"use strict";
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});
const menu = document.querySelector(".navbar");
const openBtn = document.querySelector(".bx-menu");
const closeBtn = document.querySelector(".close-btn");
openBtn.onclick = () => {
  menu.classList.add("active");
};
closeBtn.onclick = () => {
  menu.classList.remove("active");
};
