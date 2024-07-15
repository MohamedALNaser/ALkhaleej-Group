// import jsonData from "./../../services/services.json" assert { type: "json" };
// let services = jsonData.servise;

let services = [];

try {
  const response = await fetch("./../../services/services.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  services = data.servise;
  // console.log(services);
} catch (error) {
  console.error("Error fetching JSON:", error);
}
let id, servData, views, link, servName, imgSrc, desc;
let i;

let sliderHotServise = document.querySelectorAll(" div.slides-hot-content");
let sliderHotServiselinks = document.querySelectorAll(
  ".Slide-content .thumb-overlay > a"
);
let slideItemDate = document.querySelectorAll(
  ".Slide-content .thumb-overlay .slide-item-date"
);
let slideItemTitle = document.querySelectorAll(
  ".Slide-content .thumb-overlay h2.slide-item-title"
);
let slideItemDesc = document.querySelectorAll(
  ".Slide-content .thumb-overlay .slide-item-desc"
);
const thumbOverlay = document.querySelectorAll(".thumb-overlay");
let bgLiner = [
  "linear-gradient(135deg, #67B26F, #4ca2cd)",
  "linear-gradient(-135deg, #d38312, #002f4b)",
  "linear-gradient(135deg, #7474BF, #348AC7)",
  "linear-gradient(-135deg, #e0be00, #dc4225)",
  "linear-gradient(135deg, #292484, #dc4225)",
  "linear-gradient(-135deg, #e0be00, #dc4225)",
  "linear-gradient(135deg, #5f2c82, #49a09d)",
  "linear-gradient(-135deg, #d38312, #002f4b)",
  "linear-gradient(135deg, #67B26F, #4ca2cd, #a7d6f7)",
];
for (i = 0; i < 9; i++) {
  id = services.length - 1 - i;
  servData = services[id].data;
  slideItemDate[i].innerHTML = servData;
  link = services[id].href;
  sliderHotServiselinks[i].setAttribute("href", link);
  imgSrc = services[id].img;
  if (typeof imgSrc === "object") {
    imgSrc = imgSrc[0];
  } else {
    imgSrc = imgSrc;
  }
  sliderHotServise[i].style.backgroundImage = `url(${imgSrc})`;
  servName = services[id].name;
  slideItemTitle[i].innerHTML = servName;
  desc = services[id].description;
  slideItemDesc[i].innerHTML = desc;
  thumbOverlay[i].style.setProperty("background-image", `${bgLiner[i]}`);
}
