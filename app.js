// select button and link class
const btnToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// add toggle functionnality
btnToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
