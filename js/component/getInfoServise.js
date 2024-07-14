import {
  getRandomNumbers,
  getMeta,
  shareButtom,
} from "./../component/Related.js";
import { readAlso } from "./footerServise.js";
// import jsonData from "./../../services/services.json" assert { type: "json" };
// let services = jsonData.servise;

let services = [];

try {
  const response = await fetch("./../../services/services.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  services = data.servise; // Assuming your JSON structure has a 'services' key
  console.log(services);
} catch (error) {
  console.error("Error fetching JSON:", error);
}
let idNum, servData, views, link, servName, imgSrc, desc, categury;
let padgeId = Number(getMeta("pageId"));
let servicesContent = document.querySelector(
  ".wp-content .content .content-container .related-articl .related-articl-container"
);
function createRelated() {
  let serviseItem = document.createElement("div");
  serviseItem.classList.add("related-articl-item");
  let serviseItemContent = document.createElement("div");
  serviseItemContent.classList.add("related-articl-item-content");

  let servisePage = document.createElement("a");
  servisePage.href = `./.${link}`;
  let serviseName = document.createElement("h3");
  servisePage.textContent = servName;

  serviseName.appendChild(servisePage);
  serviseItemContent.appendChild(serviseName);

  let itemfigure = document.createElement("figure");
  let img = document.createElement("img");
  if (typeof imgSrc == "object") {
    img.src = `./.${imgSrc[0]}`;
  } else img.src = `./.${imgSrc}`;
  let spanContent = document.createElement("span");
  spanContent.innerText = categury.split("-").join(" ");

  let articlLink = document.createElement("a");
  articlLink.href = `./.${link}`;

  let serviseDateP = document.createElement("p");
  let serviseDate = document.createElement("span");
  serviseDate.classList.add("servise-date");
  let spanDate = document.createElement("span");
  spanDate.classList.add("data");
  let spanDataIcon = document.createElement("i");
  spanDataIcon.classList.add("fa-sharp", "fa-regular", "fa-clock");
  // spanDataIcon.classList.add("fa", "fa-calendar");
  let spanDateContent = document.createElement("span");
  spanDateContent.textContent = servData;

  // itemfigure.appendChild(spanContent);
  if (categury.toLowerCase() == "Uncategorized".toLowerCase()) {
    spanContent.style.display = "none";
  }
  itemfigure.appendChild(img);
  articlLink.appendChild(itemfigure);
  serviseItem.appendChild(articlLink);
  serviseItem.appendChild(serviseItemContent);

  serviseDate.appendChild(spanDate);
  spanDate.appendChild(spanDataIcon);
  spanDate.appendChild(spanDateContent);
  serviseDateP.appendChild(serviseDate);

  serviseItem.appendChild(serviseDateP);

  servicesContent.appendChild(serviseItem);
}
function getInfo(padgeId) {
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
  ).innerHTML = categury.split("-").join(" ");
  document.querySelector(
    ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(2) a"
  ).href = `./../categury/${categury}`;
  document.querySelector(
    ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(3)"
  ).innerHTML = servName;
  document.querySelector(
    ".wp-content .home .entery-header > span a"
  ).innerHTML = categury.split("-").join(" ");
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

  if (servName.includes("0566227646")) {
    servName = servName.slice(0, servName.indexOf("0566227646"));
  }
  document.querySelector(
    ".wp-content .content .content-container article.main-content .servise-img span.servise-name span"
  ).innerHTML = servName;
  if (
    document.querySelector(
      ".wp-content .content .content-container article.main-content .entery-content p strong"
    )
  )
    document.querySelector(
      ".wp-content .content .content-container article.main-content .entery-content p strong"
    ).innerHTML = `${servName.trim()}، `;

  document.querySelectorAll(
    ".wp-content .content .content-container article.main-content .entery-content figure.attchement-img figcaption"
  )[0].innerHTML = servName;
  document.querySelectorAll(
    ".wp-content .content .content-container article.main-content .entery-content figure.attchement-img figcaption"
  )[1].innerHTML = servName;

  // document.querySelector(".header .main-menu >a").innerHTML = "مجموعة الخليج";
  let pageImgs = document.querySelectorAll("figure img");
  imgSrc = services[padgeId].img;
  if (typeof imgSrc == "object") {
    pageImgs[0].src = `./.${imgSrc[0]}`;
    pageImgs[1].src = `./.${imgSrc[1]}`;
    pageImgs[2].src = `./.${imgSrc[2]}`;
  }
  document.querySelectorAll("p > a").forEach((ele, index) => {
    for (let i = 0; i < services.length; i++) {
      servName = services[i].name.trim().split(" ");
      let serchItems = ele.textContent.trim().split(" ");
      const allExist = serchItems.every((elem) => servName.includes(elem));
      if (allExist) {
        link = services[i].href;
        ele.href = `./.${link}`;
      }
    }
  });
}
function relatedServises() {
  let relatedItems = getRandomNumbers(4, padgeId);
  servicesContent.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    servData = services[relatedItems[i]].data;
    views = services[relatedItems[i]].views;
    link = services[relatedItems[i]].href;
    servName = services[relatedItems[i]].name;
    categury = services[relatedItems[i]].categury.trim();
    if (servName.includes("خصم")) {
      servName = services[relatedItems[i]].name.slice(
        0,
        servName.indexOf("خصم")
      );
    }
    imgSrc = services[relatedItems[i]].img;
    desc = services[relatedItems[i]].description;
    createRelated(servData, views, link, servName, imgSrc, desc, categury);
  }
}
let GotoContent = document.querySelector(".wp-content .home a.go-to-content");
if (GotoContent) {
  GotoContent.addEventListener("click", (e) => {
    let target = e.target.getAttribute("href");
    if (target.charAt(0) === "#") {
      e.preventDefault();
      let targetSection = document.querySelector(target);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        speed: 1500,
      });
    }
  });
}
function myFunction(counter) {
  try {
    // do something that might cause an error
    readAlso();
    relatedServises();
    getInfo(padgeId);
    shareButtom(services, padgeId, imgSrc, servName);
    // console.log("Function executed");
  } catch (error) {
    // handle the error and call the function again
    console.log("Error occurred: " + error.message);
    counter++;
    if (counter < 3) {
      myFunction(counter);
    } else {
      console.log("Maximum number of attempts reached. Exiting function.");
    }
  }
}

// call the function with an initial counter of 0
myFunction(0);

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
