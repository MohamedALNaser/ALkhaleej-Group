import { getRandomNumbers, getMeta } from "./../component/Related.js";
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
// console.log(jsonData);
let id, servData, link, servName;
let i;
let footerItemLink = document.querySelectorAll(
  ".footer .wp-footer-content .col ul.content a"
);
let footerLIsDate = document.querySelectorAll(
  ".footer .wp-footer-content .col ul.content li.sevice span.sevice-data"
);
let footerLIsName = document.querySelectorAll(
  ".footer .wp-footer-content .col ul.content li.sevice h4.sevice-name"
);

let exist = getMeta("pageId");
footerItemLink.forEach((e, index) => {
  i = services.length - index - 1;
  servData = services[i].data;
  link = services[i].href;
  servName = services[i].name;
  if (servData !== "" && servName !== "") {
    if (exist !== "") {
      footerItemLink[index].href = `./.${link}`;
    } else footerItemLink[index].href = `${link}`;
    footerLIsName[index].innerHTML = servName;
    footerLIsDate[index].innerHTML = servData;
  }
});
let overlay = `
<div class="overlay">
        <div class="close-overlay">
            x
        </div>
        <form action="./../search" method="">
            <input inputmode="search" type="text" name="searchName" title="بحث عن" placeholder="بحث عن"
                autocomplete="off" value="">
            <button class="search-btn">
                <span>
                    <i class="fa fa-search"></i>
                </span>
            </button>
        </form>
        </div>
        <a href=" https://api.whatsapp.com/send?phone=+966566227646&amp;text=" class=" float " target=" _blank ">
          <i class=" fa-brands fa-whatsapp fa-x my-float "></i>
        </a>
        <a href=" tel:0566227646 " class=" tel ">0566227646 <i class=" fa-solid fa-phone "></i></a>
    `;
document.body.innerHTML += overlay;
// document.body.appendChild(footerItemLink);
document
  .querySelector(".header .main-menu .menu-spans")
  .addEventListener("click", () => {
    document.querySelector(".overlay").classList.toggle("active");
  });
document
  .querySelector(".overlay .close-overlay")
  .addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("active");
  });

function readAlso() {
  if (document.querySelector(".check-also-box")) {
    document.querySelector(".check-also-box").remove();
  }
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
  if (typeof services[itemIndex].img == "object") {
    // img.src = `./.${imgSrc[0]}`;
    checkAlsoItemImg.src = `./.${services[itemIndex].img[0]}`;
  } else checkAlsoItemImg.src = `./.${services[itemIndex].img}`;
  let spanContent = document.createElement("span");
  spanContent.innerText = services[itemIndex].categury;
  articlLink.appendChild(spanContent);
  articlLink.appendChild(checkAlsoItemImg);
  checkAlsoItem.appendChild(articlLink);
  let checkAlsoItemContentH3 = document.createElement("h3");
  let servisePage = document.createElement("a");
  servisePage.href = `./.${link}`;
  servisePage.appendChild(checkAlsoItemContentH3);
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
        // console.log("tags");
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
    //
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
let serGropArray = [
  "مكافحة حشرات",
  "قصور ",
  "خزانات",
  "مكيفات",
  "مسابح",
  "جلي بلاط",
  // "تنظيف",
  "تعقيم",
];
let lists = document.querySelector(
  ".header .main-menu .menu-list > ul > li ul.lists"
);
window.onload = () => {
  let menuList = document.querySelectorAll(".menu-list li a");
  menuList.forEach((item) => {
    item.addEventListener("click", (e) => {
      let target = e.target.getAttribute("href");
      if (target.charAt(0) === "#") {
        e.preventDefault();
        let targetSection = document.querySelector(target);
        // console.log(targetSection);
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
          speed: 1500,
        });
        // window.scrollTo({
        //   top: targetSection.offsetTop,

        // });
      }
    });
  });
};
function createElementNavLinks(elementName, link) {
  if (lists) {
    serGropArray.forEach((e) => {
      let listsLis = document.createElement("li");
      // listsLis.classList.add("ser-grop");
      listsLis.textContent = e;
      lists.appendChild(listsLis);
      let servGrob = document.createElement("ul");
      servGrob.classList.add("servGrob");
      listsLis.appendChild(servGrob);
      for (let i = 0; i < services.length; i++) {
        if (services[i].name.includes(e)) {
          let servGrobLi = document.createElement("li");
          servGrobLi.classList.add("servGrobLi");
          let servGrobLiLink = document.createElement("a");
          servGrobLiLink.href = `./.${services[i].href}`;
          servGrobLiLink.textContent = services[i].name;
          servGrobLi.appendChild(servGrobLiLink);
          servGrob.appendChild(servGrobLi);
        }
      }
    });
  }
}

function myFunction(counter) {
  try {
    // do something that might cause an error
    createElementNavLinks();
    // // console.log("Function executed");
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
// let pageImgs = document.querySelectorAll(" img");
// pageImgs.forEach((img) => {
//   img.addEventListener("error", () => {
//     if (
//       window.location.pathname.substring(1, 5) === "page" ||
//       window.location.pathname.substring(1, 4) === "tag"
//     )
//       img.src = "./../images/img.jpg";
//     else img.src = "./images/img.jpg";
//   });
// });

export { readAlso };
