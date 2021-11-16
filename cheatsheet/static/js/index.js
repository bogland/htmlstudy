const eleList = document.querySelectorAll(
  ".input-container[data-error] .input"
);
eleList.forEach((ele) => {
  ele.addEventListener("input", () => {
    ele.parentElement.removeAttribute("data-error");
  });
});

class Header {
  headerEleSelector = "header";
  constructor() {
    const header = document.querySelector(this.headerEleSelector);
    this.header = header;
    console.log(header);
    document.addEventListener(
      "scroll",
      throttle((e) => {
        const scrollY = window.pageYOffset;
        const oldScroll = this.oldScroll || 0;
        if (oldScroll > scrollY) {
          this.show();
        } else {
          this.hide();
        }
        this.oldScroll = scrollY;
      }, 100)
    );
  }

  show() {
    this.header.classList.remove("hidden");
    this.header.style.color = "red"; //inline방식
  }
  hide() {
    this.header.classList.add("hidden");
  }
}

function throttle(fn, delay) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, delay);
    }
  };
}

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, delay);
  };
}
