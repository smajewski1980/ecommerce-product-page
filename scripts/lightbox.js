const mainImage = document.querySelector(".main-img-wrapper");
const modal = document.querySelector("dialog");
const modalClose = document.querySelector(".lightbox img:first-child");

modalClose.addEventListener("click", () => {
  modal.close();
});

mainImage.addEventListener("click", () => {
  modal.showModal();
});
