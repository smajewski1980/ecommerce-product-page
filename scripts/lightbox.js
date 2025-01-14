const mainImage = document.querySelector(".main-img-wrapper");
const modal = document.querySelector("dialog");
const modalClose = document.querySelector(".btn-lightbox-close");
const thumbs = document.querySelectorAll(".lightbox-thumb-wrapper");
const prodImgs = document.querySelectorAll(".prod-img");
const lightboxPrev = document.querySelector(".btn-lightbox-prev");
const lightboxNext = document.querySelector(".btn-lightbox-next");

let activeProdId = "1";

function handleLightboxPrev() {
  if (activeProdId > 1) {
    activeProdId--;
    removeActiveImageClass();
    addActiveImageClass();
    removeActiveThumbClass();
    thumbs.forEach((thumb) => {
      if (thumb.dataset.thumb === `prod-${activeProdId}`) {
        thumb.classList.add("active-thumb");
      }
    });
  }
}
function handleLightboxNext() {
  if (activeProdId < 4) {
    activeProdId++;
    removeActiveImageClass();
    addActiveImageClass();
    removeActiveThumbClass();
    thumbs.forEach((thumb) => {
      if (thumb.dataset.thumb === `prod-${activeProdId}`) {
        thumb.classList.add("active-thumb");
      }
    });
  }
}

function removeActiveImageClass() {
  prodImgs.forEach((img) => {
    img.classList.remove("active-prod-img");
  });
}

function addActiveImageClass() {
  prodImgs.forEach((img) => {
    if (img.dataset.prod === `prod-${activeProdId}`) {
      img.classList.add("active-prod-img");
    }
  });
}

function removeActiveThumbClass() {
  thumbs.forEach((thumb) => {
    thumb.classList.remove("active-thumb");
  });
}

function handleThumbClick(e) {
  activeProdId = e.target.dataset.thumb.slice(-1);
  const newActiveThumbElem = e.target;
  removeActiveThumbClass();
  newActiveThumbElem.classList.add("active-thumb");
  removeActiveImageClass();
  addActiveImageClass();
}

modalClose.addEventListener("click", () => {
  modal.close();
});

mainImage.addEventListener("click", () => {
  modal.showModal();
});

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", handleThumbClick);
});

lightboxPrev.addEventListener("click", handleLightboxPrev);
lightboxNext.addEventListener("click", handleLightboxNext);
