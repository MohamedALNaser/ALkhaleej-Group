let logo = document.querySelector(".logo");
let logoLink = document.querySelector(".logo a");
if (logo) {
  logo.style.transition = " display 0.3s linear";
  if (window.scrollY > 50) {
    // logo.style.display = "none";
    logo.style.visibility = "hidden";
    logoLink.style.display = "none";
  } else {
    // logo.style.display = "block";
    logo.style.visibility = "visible";
    logoLink.style.display = "flex";
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      // logo.style.display = "none";
      logo.style.visibility = "hidden";
      logoLink.style.display = "none";
    } else {
      // logo.style.display = "block";
      logo.style.visibility = "visible";
      logoLink.style.display = "flex";
    }
  });
}
document
  .querySelector(".overlay .close-overlay")
  .addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("active");
  });

// menu-list item click = go to section with smooth scroll add transition speed
let menuList = document.querySelectorAll(".menu-list li a");
menuList.forEach((item) => {
  item.addEventListener("click", (e) => {
    let target = e.target.getAttribute("href");
    if (target.charAt(0) === "#") {
      e.preventDefault();
      let targetSection = document.querySelector(target);
      // targetSection.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        speed: 1500,
      });
    }
  });
});

// menu-list click go to section in another page and wait until page load then go to the section with smooth scroll add transition speed
