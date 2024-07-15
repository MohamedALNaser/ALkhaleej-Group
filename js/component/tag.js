import {
  getRandomNumbers,
  getMeta,
  shareButtom,
} from "./../component/Related.js";
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

let divOrder, servData, views, link, servName, imgSrc, desc, categury;
function createRelated() {
  // servData, link, servName, imgSrc
  let servicesContent = document.querySelector(
    ".related-articl .related-articl-container"
  );
  let serviseItem = document.createElement("div");
  serviseItem.classList.add("related-articl-item");
  let serviseItemContent = document.createElement("div");
  serviseItemContent.classList.add("related-articl-item-content");

  let servisePage = document.createElement("a");
  servisePage.href = `./.${link}`;
  let serviseName = document.createElement("h3");
  servisePage.textContent = servName;

  let serviseDateP = document.createElement("p");
  let serviseDate = document.createElement("span");
  serviseDate.classList.add("servise-date");
  let spanDate = document.createElement("span");
  spanDate.classList.add("data");
  let spanDataIcon = document.createElement("i");
  //   spanDataIcon.classList.add("fa-sharp", "fa-regular", "fa-clock");
  spanDataIcon.classList.add("fa", "fa-calendar");
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
  let descP = document.createElement("p");
  descP.innerHTML = desc;

  let btn = document.createElement("a");
  btn.classList.add("btn");
  btn.href = `./.${link}`;
  btn.textContent = "أكمل القراءة »";

  serviseDate.appendChild(spanDate);
  serviseDate.appendChild(spanviews);
  spanviews.appendChild(spanViewsIcon);
  spanviews.appendChild(spanViewsContent);
  spanDate.appendChild(spanDataIcon);
  spanDate.appendChild(spanDateContent);
  serviseDateP.appendChild(serviseDate);

  serviseName.appendChild(servisePage);
  serviseItemContent.appendChild(serviseDateP);
  serviseItemContent.appendChild(serviseName);
  serviseItemContent.appendChild(descP);
  serviseItemContent.appendChild(btn);

  let itemfigure = document.createElement("a");
  itemfigure.href = `./.${link}`;
  let img = document.createElement("img");
  if (typeof imgSrc == "object") {
    img.src = `./.${imgSrc[0]}`;
  } else img.src = `./.${imgSrc}`;
  let spanContent = document.createElement("span");
  spanContent.innerText = categury.split("-").join(" ");
  itemfigure.appendChild(spanContent);

  itemfigure.appendChild(img);
  serviseItem.appendChild(itemfigure);
  serviseItem.appendChild(serviseItemContent);

  servicesContent.appendChild(serviseItem);
}

let categuryName = getMeta("Pagecategory");
let PageTagName = getMeta("PageTag");

document.title = `${categuryName} الأرشيف - مجموعة الخليج`;
document.querySelector(".related-articl > h2").innerHTML = categuryName;
document.querySelector("li.breadcrumb-item.category").innerHTML = categuryName;
let PageTagNames = PageTagName.split(",");
let relatedItems = [];
PageTagNames.forEach((ele, index) => {
  for (let i = 0; i < services.length; i++) {
    servName = services[i].name.trim().split(" ");
    let serchItems = ele.trim().split(" ");
    const allExist = serchItems.every((elem) => servName.includes(elem));
    if (allExist && PageTagName !== "") {
      servData = services[i].data;
      views = services[i].views;
      link = services[i].href;
      servName = services[i].name;
      imgSrc = services[i].img;
      desc = services[i].description;
      divOrder = PageTagNames.length - 1 - index;
      categury = services[i].categury;
      createRelated(
        servData,
        views,
        link,
        servName,
        imgSrc,
        desc,
        divOrder,
        categury
      );
      relatedItems.push(i);
    }
  }
});
if (relatedItems.length === 0) {
  document.querySelector(
    ".related-articl-container"
  ).innerHTML = `In Process <i class="fa-solid fa-gear fa-fw fa-spin"></i>`;
  document.querySelector(".related-articl-container").style.cssText = `
    flex-direction: row;
    font-size: 18px;
    direction: ltr;
    width: 160px;
    margin: 0 auto;
    border: 2px solid #eee;
    padding: 14px;
  `;
}

// check images loaded or not and if not use default image
let pageImgs = document.querySelectorAll(" img");
pageImgs.forEach((img) => {
  img.addEventListener("error", () => {
    if (
      window.location.pathname.substring(1, 5) === "page" ||
      window.location.pathname.substring(1, 4) === "tag" ||
      window.location.pathname.substring(1, 9) === "categury"
    )
      img.src = "./../images/img.jpg";
    else img.src = "./images/img.jpg";
  });
});
