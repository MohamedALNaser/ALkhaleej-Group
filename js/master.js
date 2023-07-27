let logo = document.querySelector(".logo");
logo.style.transition = " display 0.3s linear";
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
});
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
