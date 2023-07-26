import jsonData from "./../../services/services.json" assert { type: "json" };
let services = jsonData.servise;
let idNum, servData, views, link, servName, imgSrc, desc, categury;
let padgeId = Number(getMeta("pageId"));
const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".search-btn");

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
  let servicesContent = document.querySelector(
    ".wp-content .content .content-container .related-articl .related-articl-container"
  );
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
  img.src = `./.${imgSrc}`;
  let spanContent = document.createElement("span");
  spanContent.innerText = categury;

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

  itemfigure.appendChild(spanContent);
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
  ).innerHTML = categury;
  document.querySelector(
    ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(2) a"
  ).href = `./../categury/${categury}`;
  document.querySelector(
    ".wp-content .home .breadcrumb .breadcrumb-item:nth-child(3)"
  ).innerHTML = servName;
  document.querySelector(
    ".wp-content .home .entery-header > span a"
  ).innerHTML = categury;
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

  document.querySelector(".header .main-menu a").innerHTML = "مجموعة الخليج";
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
  let relatedItems = getRandomNumbers(4);
  for (let i = 0; i < 4; i++) {
    servData = services[relatedItems[i]].data;
    views = services[relatedItems[i]].views;
    link = services[relatedItems[i]].href;
    servName = services[relatedItems[i]].name;
    categury = services[relatedItems[i]].categury.trim();
    if (servName.includes("خصم")) {
      // console.log(servName);
      // console.log(servName.indexOf("خصم"));
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
const getRandomNumbers = (num) => {
  const numbers = [];

  while (numbers.length < num) {
    const randomNumber = Math.floor(Math.random() * 46);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
};
function shareButtom() {
  link = window.location.href;
  link = `https://mohamedalnaser.github.io/ALkhaleej-Group/`;
  servName = services[padgeId].name;
  let share = [
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    `https://twitter.com/share?text=${encodeURIComponent(
      servName.trim()
    )}&url=${encodeURIComponent(link)}`,
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      link
    )}&title=${encodeURIComponent(servName.trim())}
    `,
    `https://www.tumblr.com/share/link?url=${encodeURIComponent(
      link
    )}&name=${encodeURIComponent(servName.trim())}`,
    `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      link
    )}&description=${encodeURIComponent(
      servName.trim()
    )}&media=${encodeURIComponent(imgSrc)}`,
    `https://reddit.com/submit?url=${encodeURIComponent(
      link
    )}&title=${encodeURIComponent(servName.trim())}`,
    `https://vk.com/share.php?url=${encodeURIComponent(link)}`,
    `mailto:?subject=Check%20out%20this%20article!&body=${encodeURIComponent(
      link
    )}`,
    "#",
  ];

  let share_links = document.querySelectorAll(".share-links a");
  share_links.forEach((link, index) => {
    if (index == share_links.length - 1) return;
    link.href = share[index];
    link.target = "_blank";
  });
  share_links[share_links.length - 1].addEventListener("click", () => {
    window.print();
  });

  let logoText = document.querySelector(".header .main-menu a");
  logoText.style.transition = " display 0.3s linear";
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      logoText.style.display = "none";
    } else {
      logoText.style.display = "block";
    }
  });
}
searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    window.location.href = "https://example.com/search?q=" + searchTerm;
  }
});
function readAlso() {
  let itemIndex = getRandomNumbers(1);
  link = services[itemIndex].href;
  let checkAlso = document.createElement("div");
  checkAlso.classList.add("check-also-box");
  let checkAlsoGloblTitel = document.createElement("div");
  checkAlsoGloblTitel.classList.add("check-also-globl-titel");
  let checkAlsoGloblTitelH3 = document.createElement("h3");
  checkAlsoGloblTitelH3.textContent = "شاهد أيضاً";
  checkAlsoGloblTitel.appendChild(checkAlsoGloblTitelH3);
  let checkAlsoRemove = document.createElement("a");
  checkAlsoRemove.classList.add("check-also-remove");
  checkAlsoRemove.href = "#";
  checkAlsoRemove.textContent = "X";
  checkAlsoGloblTitel.appendChild(checkAlsoRemove);
  checkAlsoRemove.addEventListener("click", (e) => {
    e.preventDefault();
    checkAlso.classList.add("hide-check-also");
  });

  let checkAlsoItem = document.createElement("div");
  checkAlsoItem.classList.add("check-also-item");
  let articlLink = document.createElement("a");
  articlLink.href = `./.${link}`;
  let checkAlsoItemImg = document.createElement("img");
  checkAlsoItemImg.src = `./.${services[itemIndex].img}`;
  let spanContent = document.createElement("span");
  spanContent.innerText = services[itemIndex].categury;
  articlLink.appendChild(spanContent);
  articlLink.appendChild(checkAlsoItemImg);
  checkAlsoItem.appendChild(articlLink);
  let checkAlsoItemContentH3 = document.createElement("h3");
  let servisePage = document.createElement("a");
  servisePage.href = `./.${link}`;
  servisePage.textContent = servName;
  servisePage.appendChild(checkAlsoItemContentH3);
  // serviseItemContent.appendChild(checkAlsoItemContentH3);
  checkAlsoItemContentH3.textContent = services[itemIndex].name;
  checkAlsoItem.appendChild(servisePage);
  checkAlso.appendChild(checkAlsoGloblTitel);
  checkAlso.appendChild(checkAlsoItem);

  document
    .querySelector(".wp-content .wp-content-container")
    .appendChild(checkAlso);
  let lastPInArtical = document.querySelectorAll(
    ".wp-content .wp-content-container article.main-content p"
  )[
    document.querySelectorAll(
      ".wp-content .wp-content-container article.main-content p"
    ).length - 1
  ];
  // lastPInArtical.insertAdjacentElement("afterend",checkAlso)
  if (document.querySelector(".tags")) {
    if (
      document.querySelector(".tags").offsetTop <
        window.scrollY + window.innerHeight &&
      window.innerWidth > 991
    ) {
      checkAlso.style.cssText = `
    left: 0;
    transform: translate(0%,0%);`;
    } else {
      checkAlso.style.cssText = `
    left: 0;
    transform: translate(-100%,0%);`;
    }
    window.addEventListener("scroll", () => {
      if (
        document.querySelector(".tags").offsetTop <
          window.scrollY + window.innerHeight &&
        window.innerWidth > 991
      ) {
        checkAlso.style.cssText = `
      left: 0;
      transform: translate(0%,0%);`;
      } else {
        checkAlso.style.cssText = `
      left: 0;
      transform: translate(-100%,0%);`;
      }
    });
  } else {
    if (
      lastPInArtical.offsetTop < window.scrollY + window.innerHeight &&
      window.innerWidth > 991
    ) {
      checkAlso.style.cssText = `
    left: 0;
    transform: translate(0%,0%);`;
    } else {
      checkAlso.style.cssText = `
    left: 0;
    transform: translate(-100%,0%);`;
    }
    window.addEventListener("scroll", () => {
      if (
        lastPInArtical.offsetTop < window.scrollY + window.innerHeight &&
        window.innerWidth > 991
      ) {
        checkAlso.style.cssText = `
      left: 0;
      transform: translate(0%,0%);`;
      } else {
        checkAlso.style.cssText = `
      left: 0;
      transform: translate(-100%,0%);`;
      }
    });
  }
}

readAlso();
relatedServises();
getInfo(padgeId);
shareButtom();
