const objMarginArr = {};
Array.from(Array(400).keys()).forEach((v) => {
  objMarginArr[v.toString()] = `${v}px`;
});
tailwind.config = {
  theme: {
    extend: {
      margin: objMarginArr,
      padding: objMarginArr,
    },
  },
};
