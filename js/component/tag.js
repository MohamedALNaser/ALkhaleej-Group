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
  btn.textContent = "أكمل القراءة >>";

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

  itemfigure.appendChild(img);
  serviseItem.appendChild(itemfigure);
  serviseItem.appendChild(serviseItemContent);

  servicesContent.appendChild(serviseItem);
}
// function relatedServises(categuryName) {
//   for (let i = 0; i < services.length; i++) {
//     if (
//       categuryName.trim().toLowerCase() ===
//       services[i].categury.trim().toLowerCase()
//     ) {
//       servData = services[i].data;
//       views = services[i].views;
//       link = services[i].href;
//       servName = services[i].name;
//       imgSrc = services[i].img;
//       desc = services[i].description;
//       if (servData !== "" && link !== "" && servName !== "" && imgSrc !== "") {
//         createRelated(servData, views, link, servName, imgSrc, desc);
//       }
//     }
//   }
// }
let categuryName = getMeta("Pagecategory");
let PageTagName = getMeta("PageTag");

document.title = `${categuryName} الأرشيف - جداول الخليج`;
document.querySelector(".related-articl > h2").innerHTML = categuryName;
document.querySelector("li.breadcrumb-item.category").innerHTML = categuryName;
// relatedServises(PageTagName);

// let relatedItems = [];
for (let i = 0; i < services.length; i++) {
  servName = services[i].name.split(" ");
  let serchItems = PageTagName.split(" ");

  const allExist = serchItems.every((elem) => servName.includes(elem));

  if (allExist) {
    servData = services[i].data;
    views = services[i].views;
    link = services[i].href;
    servName = services[i].name;
    imgSrc = services[i].img;
    desc = services[i].description;
    if (servData !== "" && link !== "" && servName !== "" && imgSrc !== "") {
      createRelated(servData, views, link, servName, imgSrc, desc);
    } else {
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
    // relatedItems.push(i);
  }
}
// console.log(relatedItems);
