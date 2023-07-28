import jsonData from "./../../services/services.json" assert { type: "json" };
let services = jsonData.servise;
let id, servData, views, link, servName, imgSrc, desc;
let i;
function create(id, servData, views, link, servName, imgSrc, desc) {
  let servicesContent = document.querySelector(
    ".wp-content .section .wp-section-content .services .services-content"
  );
  let serviseItem = document.createElement("div");
  serviseItem.classList.add("servise-item");
  serviseItem.dataset.serviseId = id;

  let serviseDate = document.createElement("div");
  serviseDate.classList.add("servise-date");
  let spanDate = document.createElement("span");
  spanDate.classList.add("data");
  let spanDataIcon = document.createElement("i");
  spanDataIcon.classList.add("fa-sharp", "fa-regular", "fa-clock");
  let spanDateContent = document.createElement("span");
  spanDateContent.textContent = servData;

  let spanviews = document.createElement("span");
  spanviews.classList.add("views");
  let spanViewsIcon = document.createElement("i");
  spanViewsIcon.classList.add("fa-solid", "fa-fire");
  // spanViewsIcon.style.color = "#fafafa";
  let spanViewsContent = document.createElement("span");
  if (views > 500 && views < 2000) {
    spanviews.style.color = "#f47512";
    spanviews.classList.add("warm");
  } else if (views > 2000) {
    spanviews.style.color = "#f3502a";
    spanviews.classList.add("hot");
  }
  if (views >= 1000) {
    spanViewsContent.textContent = `${views[0]},${views.slice(1)}`;
  } else {
    spanViewsContent.textContent = views;
  }

  serviseDate.appendChild(spanDate);
  spanDate.appendChild(spanDataIcon);
  spanDate.appendChild(spanDateContent);
  serviseDate.appendChild(spanviews);
  spanviews.appendChild(spanViewsIcon);
  spanviews.appendChild(spanViewsContent);
  let servisePage = document.createElement("a");
  servisePage.href = link;
  let serviseName = document.createElement("h3");
  serviseName.classList.add("servise-name");
  serviseName.textContent = servName;

  servisePage.appendChild(serviseName);
  let item = document.createElement("div");
  item.classList.add("item");
  let serviseImg = document.createElement("div");
  serviseImg.classList.add("servise-img");
  let img = document.createElement("img");
  if (typeof imgSrc == "object") {
    img.src = `${imgSrc[0]}`;
  } else {
    img.src = imgSrc;
  }

  let serviseDesc = document.createElement("p");
  serviseDesc.classList.add("servise-desc");
  serviseDesc.textContent = desc;

  let pageLink = document.createElement("a");

  pageLink.href = link;

  pageLink.appendChild(serviseImg);
  serviseImg.appendChild(img);
  item.appendChild(pageLink);
  item.appendChild(serviseDesc);
  serviseItem.appendChild(serviseDate);
  serviseItem.appendChild(servisePage);
  serviseItem.appendChild(item);

  servicesContent.appendChild(serviseItem);
}
for (i = services.length - 1; i >= 0; i--) {
  id = services[i].id;
  servData = services[i].data;
  views = services[i].views;
  link = services[i].href;
  servName = services[i].name;
  imgSrc = services[i].img;
  desc = services[i].description;
  create(id, servData, views, link, servName, imgSrc, desc);
}
