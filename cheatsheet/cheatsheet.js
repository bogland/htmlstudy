//Date
Date.now();
date = new Date(1991, 11, 25, 3, 50); // 1991년 12월 25일 3:50:00 (월 +1 주의)
var dt = new Date("2011-12-01");
var dt2 = new Date("2010-12-04");
date = dt.getTime() - dt2.getTime(); //getTime 1970/1/1 12:00 기준 경과한 밀리 초
date = Math.floor(date / (365 * 60 * 60 * 1000)); // 일 차이
var year = dt.getFullYear();
var month = dt.getMonth() + 1;
var date = dt.getDate();
var hours = dt.getHours();
var minutes = dt.getMinutes();
var seconds = dt.getSeconds();
var milliseconds = dt.getMilliseconds();
var arrDayStr = ["일", "월", "화", "수", "목", "금", "토"];
var weak = arrDayStr[dt.getDay()];
dt.setFullYear(dt.getFullYear() + 1); // 1년 증가
var utc = new Date(Date.UTC(2019, 5, 11));

var year = dt.getFullYear();
var month = (dt.getMonth() + 1).toString().padStart(2, "0");
var day = dt.getDate().toString().padStart(2, "0");
dateFormatted = [year, month, day].join("-");

//Axios
const axios = require("axios");
const getBreeds = async () => {
  try {
    return await axios.get("https://dog.ceo/api/breeds/list/all");
  } catch (error) {
    console.error("error : ", error);
  }
};
const countBreeds = async () => {
  const breeds = await getBreeds();
  if (breeds.data.message) {
    console.log(
      `현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`
    );
  }
};
countBreeds();

//Regex https://www.youtube.com/watch?v=t3M6toIflyQ
var str = `
Hi there, Nice to meet you. And Hello there and hi.
I love grey(gray) color not a gry, graay and graaay.
Ya ya YaYaYa Ya
abcdefghijklmnopqrstuvwxyz
ABSCEFGHIJKLMNOPQRSTUVWZYZ
1234567890
.[]{}()\^$|?*+
0. 010-898-0893
1. 010-405-3412
2. 02-878-8888
dream.coder.ellie@gmail.com
hello@daum.net
`;
var re = /(\d). (\d{2,4})-(\d{2,4})-(\d{2,4})/gm;
var arr = str.match(re);
dict = {};
var newArr = arr.map(
  (str) => (dict[str.replace(re, "$1")] = str.replace(re, "$2$3$4"))
);
console.log(dict);
var re = /(\w+)\s(\w+)/;
var newstr = str.replace(re, "$2, $1");
var re = /\w+\s/gim;
var myArray = str.match(re);
var re = /\w+\s/gim; //g는 전체 문장, i : 대소문자 구분, m : 멀티라인(문장의 기준)
var myArray = str.match(re);
/*
? : (zero or one)
* : (zero or more)
+ : (one or more)
{2,} : 2개 이상
{2,3} : 2~3개
Ya\b : 단어 뒤에 붙은 Ya,
Ya\B : 단어 뒤에 붙은 Ya를 제외한 나머지
\bYa : 단어 앞에 붙은 Ya
^Ya : 문장 앞에 붙은 Ya 검출
Ya$ : 문장 끝에 붙은 Ya 검출
\[\] : 특수 문자 검출
. : 줄바꿈 제외한 모든 글자
\d : 숫자, \D 숫자를 제외
\w : 단어(알파벳,숫자,_) , \D 단어를 제외
*/
var re = /[a-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]/gim; //특수 문자 제외하고 검출
var res = re.test(str);
var res = str.match(re);
console.log(res);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  static display(height, width) {
    console.log(`static display ${height} : ${width}`);
  }
}
rect = new Rectangle(10, 10);
Rectangle.display(10, 20);
console.log(rect.height);
