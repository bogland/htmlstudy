대상 : https://www.welcometojapan.or.kr/jroute/  
https://www.figma.com/file/BxBV7BWvTYMc7fTT6sWvki/Untitled?node-id=0%3A1

배포 : http://3.38.13.117:3001

## 타입스크립트 기반 설치

> yarn create react-app . --template typescript

## module scss 설치

> yarn add node-sass

## scss Module Transform Extension

className="Test" -> styles.Test

## reset css

> yarn add styled-reset styled-components  
> <Reset />

## react mediaquery hook

> yarn add react-responsive
> const isPC = useMediaQuery({ minWidth: variables.minWidthPC });

## sass variables in js

global.d.ts 파일을 src/ 폴더 내에 생성
'''
declare module "\*.scss" {
const content: { [className: string]: string };
export = content;
}
'''
import variables from "css/global.scss";
사용시

## 절대경로

tsconfig.json에 요소 추가
"baseUrl": "src"

## 특이사항

1. global.scss 에서 grid layout으로 반응형 구현

- 이때 자식에 대해서만 grid-area이 적용됨
- 2번 depth를 가지는 자식의 경우, 한번더 grid 구조를 선언해야함

2. Left - Center 구조

- Left를 absolute로 두고 justifyContent:center로 둠

3. 글자 + 이미지 겹치는 구조

- 겹칠때에는 flex를 쓰지 못하고 absolute 및 z-index로 겹치게 만듬

4. slider 요소가 늘어나면 width가 늘어나므로 ul tag width:100vw로 지정

5. mediaquery가 필요한 요소는 mixin으로 관리  
   '''
   $mobile: 10px;
$pc: 20px 100px;

@mixin padding() {
padding: $mobile;
@media screen and (min-width: 600px) {
padding: $pc;
br {
display: none;
}
}
}

.textLeft {
// padding: 10px;
@include padding();
}

'''
