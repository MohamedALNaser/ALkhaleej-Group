import jsonData from "./services/services.json" assert { type: "json" };
let services = jsonData.servise;

let servData, views, link, servName, imgSrc, desc, categury, servBody;
// const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".search-btn");

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
  img.src = `./.${imgSrc}`;
  // serviseItem.style.order = divOrder;
  let spanContent = document.createElement("span");
  spanContent.innerText = categury;
  itemfigure.appendChild(spanContent);
  itemfigure.appendChild(img);
  serviseItem.appendChild(itemfigure);
  serviseItem.appendChild(serviseItemContent);

  servicesContent.appendChild(serviseItem);
}

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const serchItems = document.getElementById("serchTerm").value;
  if (serchItems !== "") {
    const url = `https://example.com/search?name=${encodeURIComponent(
      serchItems
    )}`;
    window.location.href = url;
  }
});

const urlParams = new URLSearchParams(window.location.search);
const serchItems = urlParams.get("searchName");
// const charsAfterEqual = serchItems.substring(serchItems.indexOf("=") + 1);
// console.log(serchItems);
// console.log(charsAfterEqual);
document.title = `لقد بحثت عن ${serchItems} - مجموعة الخليج`;
document.querySelector(
  ".related-articl >h2"
).innerHTML = `نتائج بحث عن : ${serchItems}`;
document.querySelector(
  "li.breadcrumb-item.category"
).innerHTML = `نتائج بحث عن : ${serchItems}`;
document.querySelector("input.search-field").value = serchItems;
let relatedItems = [];

for (let i = 0; i < services.length; i++) {
  servBody = services[i].body.split(" ");

  const allExist = serchItems
    .split(" ")
    .every((elem) => servBody.includes(elem));

  if (allExist && serchItems !== "") {
    servData = services[i].data;
    views = services[i].views;
    link = services[i].href;
    servName = services[i].name;
    imgSrc = services[i].img;
    desc = services[i].description;
    categury = services[i].categury;
    createRelated(servData, views, link, servName, imgSrc, desc);
    relatedItems.push(i);
  }
}

if (relatedItems.length === 0) {
  document.querySelector(
    ".related-articl >h2"
  ).innerHTML = `لم يتم العثور على نتائج`;
  document.querySelector(".breadcrumb").style.display = `none`;
  document.querySelector(
    ".related-articl .related-articl-container"
  ).innerHTML = `المعذرة, ولكن لم يتم العثور على نتائج تطابق كلمة البحث، حاول البحث بإستخدام كلمات مختلفة .`;
}
