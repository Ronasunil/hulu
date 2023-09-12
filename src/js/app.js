"use strict";

const tabs = document.querySelector(".tab-containers");
const borders = document.querySelectorAll(".btn-border");
const operationContiner = document.querySelectorAll(".operation-tabs");
const tabImg = document.querySelector(".main-img");
const tabContents = document.querySelectorAll(".tab-component");

tabs.addEventListener("click", function (e) {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;

  //   removing border from each btn
  borders.forEach((e) => e.classList.remove("activate"));

  //   adding border to clicked btn
  btn.nextElementSibling.classList.add("activate");

  //   change image accoring to btn
  tabImg.classList = "";
  tabImg.classList.add(`section-3-main-img-${btn.dataset.tab}`);

  // change content according to btn
  tabContents.forEach((el) => el.classList.remove("component-active"));
  document
    .querySelector(`.tab-component-${btn.dataset.tab}`)
    .classList.add("component-active");
});
