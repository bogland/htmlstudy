const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();

app.get("/", (req, res) => {
  res.send(new Date());
});

app.listen(5000);
