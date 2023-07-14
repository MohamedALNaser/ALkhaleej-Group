import jsonData from "./../../services/services.json" assert { type: "json" };
let services = jsonData.servise;

let idNum, servData, views, link, servName, imgSrc, desc, categury;

function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}
function createRelated() {
  // servData, link, servName, imgSrc
  let servicesContent = document.querySelector(
    ".wp-content .content .content-container .related-articl .related-articl-container"
  );
  let serviseItem = document.createElement("div");
  serviseItem.classList.add("related-articl-item");
  let serviseItemContent = document.createElement("div");
  serviseItemContent.classList.add("related-articl-item-content");

  let servisePage = document.createElement("a");
  servisePage.href = link;
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

  serviseDate.appendChild(spanDate);
  spanDate.appendChild(spanDataIcon);
  spanDate.appendChild(spanDateContent);
  serviseDateP.appendChild(serviseDate);

  serviseName.appendChild(servisePage);
  serviseItemContent.appendChild(serviseName);
  serviseItemContent.appendChild(serviseDateP);

  let itemfigure = document.createElement("figure");
  let img = document.createElement("img");
  img.src = `./.${imgSrc}`;

  itemfigure.appendChild(img);
  serviseItem.appendChild(itemfigure);
  serviseItem.appendChild(serviseItemContent);

  servicesContent.appendChild(serviseItem);
}
function relatedServises(padgeId) {
  let flage = true;
  for (let i = 0; i < services.length - 1; i++) {
    /// dont use categuryName , all servise its categury is the same categiry

    if (
      !true
      // services[padgeId].categury.trim() === services[i].categury.trim() &&
      // i !== padgeId
    ) {
      // idNum = services[padgeId].id;
      servData = services[i].data;
      link = services[i].href;
      servName = services[i].name;
      imgSrc = services[i].img;
      if (servData !== "" && link !== "" && servName !== "" && imgSrc !== "") {
        createRelated(servData, link, servName, imgSrc);
      }
      flage = false;
    }
  }
  if (flage) {
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
}
let padgeId = Number(getMeta("pageId"));

idNum = services[padgeId].id;
servData = services[padgeId].data;
views = services[padgeId].views;
link = services[padgeId].href;
servName = services[padgeId].name;
categury = services[padgeId].categury.trim();
imgSrc = services[padgeId].img;
desc = services[padgeId].description;

document.title = servName;

document.querySelector(
  ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(2) a"
).innerHTML = categury;
document.querySelector(
  ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(2) a"
).href = `./../categury/${categury}`;
document.querySelector(
  ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(3)"
).innerHTML = servName;
document.querySelector(".wp-content .home .entery-header > span a").innerHTML =
  categury;
document.querySelector(
  ".wp-content .home .entery-header > span a"
).href = `./../categury/${categury}`;
document.querySelector(".wp-content .home .entery-header h1").innerHTML =
  servName;
document.querySelector(
  ".wp-content .home .entery-header .info > span span.date"
).innerHTML = servData;
if (views > 500 && views < 2000) {
  document
    .querySelector(".wp-content .home .entery-header .info > span span.views")
    .parentElement.classList.add("warm");
} else if (views > 2000) {
  document
    .querySelector(".wp-content .home .entery-header .info > span span.views")
    .parentElement.classList.add("hot");
}
if (views >= 1000) {
  document.querySelector(
    ".wp-content .home .entery-header .info > span span.views"
  ).innerHTML = `${views[0]},${views.slice(1)}`;
} else {
  document.querySelector(
    ".wp-content .home .entery-header .info > span span.views"
  ).innerHTML = views;
}

document.querySelector(
  ".wp-content .home .entery-header .info > span span.comments"
).innerHTML = 0;

document.querySelector(
  ".wp-content .content .content-container article.main-content .servise-img span.servise-name span"
).innerHTML = servName.trim().slice(5);

document.querySelector(
  ".wp-content .content .content-container article.main-content .entery-content p strong"
).innerHTML = `${servName.trim()}، `;
document.querySelector(
  ".wp-content .content .content-container article.main-content .entery-content p strong"
).innerHTML = `${servName.trim()}، `;
document.querySelectorAll(
  ".wp-content .content .content-container article.main-content .entery-content figure.attchement-img figcaption"
)[0].innerHTML = servName.trim().slice(5);
document.querySelectorAll(
  ".wp-content .content .content-container article.main-content .entery-content figure.attchement-img figcaption"
)[1].innerHTML = servName.trim().slice(5);

relatedServises(padgeId);

const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    window.location.href = "https://example.com/search?q=" + searchTerm;
  }
});
