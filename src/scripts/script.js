const menu = document.querySelector(".navbar__menu");
const menuItems = document.querySelectorAll(".navbar__menu__li");
const burger = document.querySelector(".navbar__burger");
const closeIcon = document.querySelector(".navbar__burger__close");
const menuIcon = document.querySelector(".navbar__burger__open");

function toggleMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("hidden");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);
menuItems.forEach(function (li) {
  li.addEventListener("click", toggleMenu);
});