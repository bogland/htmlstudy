const hamburger = document.querySelector(".menu");
const mobileGNB = document.querySelector(".mobileGNB");
const mobileClose = document.querySelector(".mobileGNB img.close");

const popupDetailPC = document.querySelector(".popupDetailPC");
const closeBtnPopupDetailPC = document.querySelector(".popupDetailPC .close");
const imageProductPC = document.querySelector(".imageProductPC");

hamburger.addEventListener("click", () => {
  mobileGNB.classList.toggle("hide");
});

mobileClose.addEventListener("click", () => {
  mobileGNB.classList.add("hide");
});

closeBtnPopupDetailPC.addEventListener("click", () => {
  popupDetailPC.classList.add("hide");
});
imageProductPC.addEventListener("click", () => {
  popupDetailPC.classList.remove("hide");
});
