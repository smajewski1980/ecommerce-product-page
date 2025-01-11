const mainImage = document.querySelector(".main-img-wrapper");
const modal = document.querySelector("dialog");
const modalClose = document.querySelector(".btn-lightbox-close");

modalClose.addEventListener("click", () => {
  modal.close();
});

mainImage.addEventListener("click", () => {
  modal.showModal();
});
