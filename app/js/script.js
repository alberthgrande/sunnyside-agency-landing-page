const navToggle = document.querySelector(".icon-hamburger");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", function () {
  navList.classList.toggle("active");
});
