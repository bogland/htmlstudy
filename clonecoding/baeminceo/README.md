대상 : https://www.welcometojapan.or.kr/jroute/  
https://www.figma.com/file/BxBV7BWvTYMc7fTT6sWvki/Untitled?node-id=0%3A1

배포 : http://3.38.13.117:3001

## 타입스크립트 기반 설치

> yarn create react-app . --template typescript

## module scss 설치

> yarn add node-sass

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
