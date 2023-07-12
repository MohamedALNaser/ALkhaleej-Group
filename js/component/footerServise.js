// .footer .wp-footer-content .col ul.content a
// .footer .wp-footer-content .col ul.content li.sevice span.sevice-data
// .footer .wp-footer-content .col ul.content li.sevice h4.sevice-name
import jsonData from "./../../services/services.json" assert { type: "json" };
// console.log(jsonData);
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
