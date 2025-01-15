const mainImage = document.querySelector(".main-img-wrapper");
const modal = document.querySelector("dialog");
const modalClose = document.querySelector(".btn-lightbox-close");
const lightboxThumbs = document.querySelectorAll(".lightbox-thumb-wrapper");
const mainThumbs = document.querySelectorAll(".main-thumb-img-wrapper");
const prodImgs = document.querySelectorAll(".prod-img");
const lightboxPrev = document.querySelector(".btn-lightbox-prev");
const lightboxNext = document.querySelector(".btn-lightbox-next");

let activeProdId = "1";

function handleLightboxPrev() {
  if (activeProdId > 1) {
    activeProdId--;
    removeActiveImageClass();
    addActiveImageClass();
    removeActiveThumbClass(lightboxThumbs);
    lightboxThumbs.forEach((thumb) => {
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
    removeActiveThumbClass(lightboxThumbs);
    lightboxThumbs.forEach((thumb) => {
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

function removeActiveThumbClass(thumbsArray) {
  thumbsArray.forEach((thumb) => {
    thumb.classList.remove("active-thumb");
  });
}

function handleThumbClick(e) {
  activeProdId = e.target.dataset.thumb.slice(-1);
  const newActiveThumbElem = e.target;
  let thumbElems;
  newActiveThumbElem.classList.contains("main-thumb-img-wrapper")
    ? (thumbElems = mainThumbs)
    : (thumbElems = lightboxThumbs);
  removeActiveThumbClass(thumbElems);
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

lightboxThumbs.forEach((thumb) => {
  thumb.addEventListener("click", handleThumbClick);
});

mainThumbs.forEach((thumb) => {
  thumb.addEventListener("click", handleThumbClick);
});

lightboxPrev.addEventListener("click", handleLightboxPrev);
lightboxNext.addEventListener("click", handleLightboxNext);
