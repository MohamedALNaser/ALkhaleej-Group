let logo = document.querySelector(".logo");
logo.style.transition = " display 0.3s linear";
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
});

let sevices = document.querySelectorAll(
  ".wp-content .section .wp-section-content .services .services-content .servise-item"
);

sevices.forEach((item, index) => {
  if (index > 5) item.style.display = "none";
});


// get data from json file and display it in the console
// let jsonData;
// fetch("./../services/services.json")
//   .then((response) => response.json())
//   .then((json) => {
//     jsonData = json;
//     console.log(jsonData);
//   });


