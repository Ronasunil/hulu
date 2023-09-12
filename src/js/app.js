"use strict";

const tabs = document.querySelector(".tab-containers");
const borders = document.querySelectorAll(".btn-border");
const operationContiner = document.querySelectorAll(".operation-tabs");
const tabImg = document.querySelector(".main-img");
const tabContents = document.querySelectorAll(".tab-component");
const section2 = document.querySelector(".section-2");
const seriesImgs = document.querySelectorAll(".lazy");

const changeTab = function (e) {
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
};

tabs.addEventListener("click", changeTab);

// const opt = {
//   root: null,
//   threshold: 0.4,
// };

const imgOnLoad = function (img) {
  console.log(img);
  img.addEventListener("load", function () {
    this.classList.remove("lazy");
  });
};

const lazyLoad = function (entries, obs) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  seriesImgs.forEach((img) => {
    const currentSrc = img.dataset.imgsrc;
    img.src = currentSrc;
    imgOnLoad(img);
  });
};

const observer = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.1,
});

observer.observe(section2);
