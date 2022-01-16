http://typescriptstudy.com/ts/article/203-TypeScript-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%ED%85%8C%EC%8A%A4%ED%8C%85-%EC%85%8B%EC%97%85

## html 상에서 ts 파일 연동하기

### 0. tsconfig.json 프로젝트 구성 파일 생성

- tsconfig.json이 있으면 typsscript 프로젝트로 인식됨
  > tsc --init

### 1. ts -> js 변환

> tsc

### 2. package.json 파일 생성

> npm init

### 3. live server같은 lite-server 설치

> npm install lite-server --save-dev

### 4. "start" script 등록

package.json상에 "start": "lite-server" 추가

### 5. 시작 및 ts 변경 자동 감지 js 생성 처리

> npm start  
> tsc --watch
