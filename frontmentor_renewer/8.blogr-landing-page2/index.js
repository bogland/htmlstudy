const hamburger = document.querySelector(".hamburger");
const popupMenu = document.querySelector(".popupMenu");
const titleWrapList = document.querySelectorAll(".titleWrap");
const categoryWrap = document.querySelector(".categoryWrap");

hamburger.addEventListener("click", () => {
  popupMenu.classList.toggle("open");
});

let indexActive = 0;
titleWrapList.forEach((v, index) => {
  v.addEventListener("click", () => {
    const nodeList = categoryWrap.querySelectorAll(".item");
    nodeList.forEach((v) => {
      console.log(indexActive, index);
      if (indexActive == index) return;
      v.classList.remove("open");
    });

    var isOpen = v.parentNode.classList.toggle("open");
    if (isOpen) indexActive = index;
  });
});
