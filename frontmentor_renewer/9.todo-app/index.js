const body = document.querySelector("body");
const iconLightList = document.querySelectorAll(".iconLight");
iconLightList.forEach((v) => {
  v.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
  });
});
