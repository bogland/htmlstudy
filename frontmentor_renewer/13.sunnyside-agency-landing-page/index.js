const hamburgerBtn = document.querySelector(".hamburgerBtn");
const navPopupMobile = document.querySelector(".navPopupMobile");
hamburgerBtn.addEventListener("click", () => {
  navPopupMobile.classList.toggle("hide");
});
console.log(hamburgerBtn);
