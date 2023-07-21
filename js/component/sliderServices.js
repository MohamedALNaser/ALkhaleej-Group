import jsonData from "./../../services/services.json" assert { type: "json" };
// console.log(jsonData);
let services = jsonData.servise;
let id, servData, views, link, servName, imgSrc, desc;
let i,
  j = 0;

let sliderHotServise = document.querySelectorAll(
  ".slick-slide h3.slides-hot-content"
);
function create(sliderHotServiseItem, servData, link, servName, imgSrc, desc) {
  // let sliderWarmServise = document.querySelector(
  //   ".w.slick-initialized .slick-slide h3.slides-warm-content"
  // );

  let sliderHotServiseImg = document.querySelector(
    " .slick-slide h3.slides-hot-content img"
  );
  // let sliderWarmServiseImg = document.querySelector(
  //   ".w.slick-initialized .slick-slide h3.slides-warm-content img"
  // );
  sliderHotServiseImg.src = imgSrc;

  let serviseLink = document.createElement("a");
  serviseLink.classList.add("slider-hot-servise");
  serviseLink.href = link;

  let serviseDate = document.createElement("div");
  serviseDate.classList.add("servise-date");
  let spanDate = document.createElement("span");
  spanDate.classList.add("hot-date");
  let spanDataIcon = document.createElement("i");
  spanDataIcon.classList.add("fa-sharp", "fa-regular", "fa-clock");
  let spanDateContent = document.createElement("span");
  spanDateContent.textContent = servData;

  if (views > 500 && views < 2000) {
    // spanviews.style.color = "#f47512";
    // sliderWarmServise.classList.add("warm");
  } else if (views > 2000) {
    // spanviews.style.color = "#f3502a";
    sliderHotServiseItem.classList.add("hot");
  }

  serviseDate.appendChild(spanDate);
  spanDate.appendChild(spanDataIcon);
  spanDate.appendChild(spanDateContent);

  let serviseName = document.createElement("h3");
  serviseName.classList.add("hot-name");
  serviseName.textContent = servName;

  let serviseDesc = document.createElement("p");
  serviseDesc.classList.add("hot-desc");
  serviseDesc.textContent = desc;

  serviseLink.appendChild(serviseDate);
  serviseLink.appendChild(serviseName);
  serviseLink.appendChild(serviseDesc);
  sliderHotServiseItem.appendChild(serviseLink);
}

for (i = 0; i < services.length; i++) {
  servData = services[i].data;
  views = services[i].views;
  link = services[i].href;
  imgSrc = services[i].img;
  servName = services[i].name;
  desc = services[i].description;
  if (
    servData !== "" &&
    // link !== "" &&
    servName !== "" &&
    desc !== "" &&
    views > 2000 &&
    j < sliderHotServise.length
  ) {
    create(sliderHotServise[j], servData, link, servName, imgSrc, desc);
    j++;
  } else if (j === sliderHotServise.length) {
    break;
  }
}
