const mainImages = document.querySelectorAll(".main-img-wrapper .prod-img");
const modal = document.querySelector("dialog");
const modalClose = document.querySelector(".btn-lightbox-close");
const lightboxThumbs = document.querySelectorAll(".lightbox-thumb-wrapper");
const mainThumbs = document.querySelectorAll(".main-thumb-img-wrapper");
const lightboxprodImgs = document.querySelectorAll(
  ".lightbox-main-img-wrapper .prod-img"
);
const mainProdImgs = document.querySelectorAll(".main-img-wrapper .prod-img");
const lightboxPrev = document.querySelector(".btn-lightbox-prev");
const lightboxNext = document.querySelector(".btn-lightbox-next");
const mobilePrev = document.querySelector(".mob-prev-icon");
const mobileNext = document.querySelector(".mob-next-icon");

let activeProdId = "1";

function handleLightboxPrev() {
  if (activeProdId > 1) {
    activeProdId--;
    removeActiveImageClass(lightboxprodImgs);
    addActiveImageClass(lightboxprodImgs);
    removeActiveThumbClass(lightboxThumbs);
    lightboxThumbs[activeProdId - 1].classList.add("active-thumb");
  }
}

function handleLightboxNext() {
  if (activeProdId < 4) {
    activeProdId++;
    removeActiveImageClass(lightboxprodImgs);
    addActiveImageClass(lightboxprodImgs);
    removeActiveThumbClass(lightboxThumbs);
    lightboxThumbs[activeProdId - 1].classList.add("active-thumb");
  }
}

function removeActiveImageClass(elemArr) {
  elemArr.forEach((img) => {
    img.classList.remove("active-prod-img");
  });
}

function addActiveImageClass(elemArr) {
  elemArr[activeProdId - 1].classList.add("active-prod-img");
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

  if (thumbElems === mainThumbs) {
    removeActiveImageClass(mainProdImgs);
    addActiveImageClass(mainProdImgs);
  } else {
    removeActiveImageClass(lightboxprodImgs);
    addActiveImageClass(lightboxprodImgs);
  }
}

function handleMainImageClick(e) {
  if (window.innerWidth > 400) {
    removeActiveImageClass(lightboxprodImgs);
    addActiveImageClass(lightboxprodImgs);
    removeActiveThumbClass(lightboxThumbs);
    const activeImg = e.target.dataset.prod;
    lightboxThumbs[activeProdId - 1].classList.add("active-thumb");
    modal.showModal();
  }
}

function handleMobileImgPrev() {
  if (activeProdId > 1) {
    activeProdId--;
    removeActiveImageClass(mainImages);
    addActiveImageClass(mainImages);
  } else return;
}

function handleMobileImgNext() {
  if (activeProdId < 4) {
    activeProdId++;
    removeActiveImageClass(mainImages);
    addActiveImageClass(mainImages);
  } else return;
}

modalClose.addEventListener("click", () => {
  modal.close();
});

mainImages.forEach((img) => {
  img.addEventListener("click", handleMainImageClick);
});

lightboxThumbs.forEach((thumb) => {
  thumb.addEventListener("click", handleThumbClick);
});

mainThumbs.forEach((thumb) => {
  thumb.addEventListener("click", handleThumbClick);
});

lightboxPrev.addEventListener("click", handleLightboxPrev);
lightboxNext.addEventListener("click", handleLightboxNext);

mobilePrev.addEventListener("click", handleMobileImgPrev);
mobileNext.addEventListener("click", handleMobileImgNext);
