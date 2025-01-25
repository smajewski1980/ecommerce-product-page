const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
