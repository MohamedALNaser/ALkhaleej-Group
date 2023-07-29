let logo = document.querySelector(".logo");
if (logo) {
  logo.style.transition = " display 0.3s linear";
  if (window.scrollY > 50) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      logo.style.display = "none";
    } else {
      logo.style.display = "block";
    }
  });
}
document
  .querySelector(".overlay .close-overlay")
  .addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("active");
  });
