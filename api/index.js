const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();

var mysql = require("mysql");
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "0000",
  database: "test",
});

app.get("/", async (req, res) => {
  try {
    connection.connect();
    const res = await connection.query("SELECT * FROM test");
  } catch (e) {
  } finally {
    connection.end();
    res.send(new Date() + ` ${JSON.stringify(res)}`);
  }
});

app.listen(5000);
