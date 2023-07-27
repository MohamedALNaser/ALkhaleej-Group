import jsonData from "./../../services/services.json" assert { type: "json" };

let services = jsonData.servise;
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
function getMeta(metaName) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i];
    }
  }

  return "";
}
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
        <form action="./../search.html" method="">
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
    document.querySelector(".overlay").classList.add("active");
  });
document
  .querySelector(".overlay .close-overlay")
  .addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("active");
  });
