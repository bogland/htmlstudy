대상 : https://www.welcometojapan.or.kr/jroute/  
https://www.figma.com/file/BxBV7BWvTYMc7fTT6sWvki/Untitled?node-id=0%3A1

배포 : http://3.38.13.117:3001

## 타입스크립트 기반 설치

> yarn create react-app . --template typescript

## module scss 설치

> yarn add sass

- node-sass depreciated됨

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

```
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

```

코드 개선 후

```
_global.scss
@mixin mobile {
  @media screen and (min-width: 600px) {
    @content;
  }
}

TopBanner.moudle.scss
@use "src/css/global" as *;
.bannerWrap {
    .textLeft {
    white-space: nowrap;
    padding: var(--padding);
  }

  $padding: (
    mobile: 10px,
    pc: 20px 100px,
  );
  --padding: #{map-get($padding, mobile)};
  @include mobile {
    --padding: #{map-get($padding, pc)};
    br {
      display: none;
    }
  }
}
```

더 간소화

```
_variables.scss
$objects: (
  paddingLeft: (
    mobile: 10px,
    pc: 100px,
  ),
);

_util.scss
@function map($object, $key) {
  $result: map-get(map-get($objects, $object), $key);
  @return #{$result};
}

@mixin makeVar($var, $value) {
  #{-- + $var}: $value;
}

@mixin varMap($variable, $object, $key, $head: #{""}) {
  $value: $head map($object, $key);
  @include makeVar($variable, $value);
}

@function toVar($value) {
  $result: var(#{-- + $value});
  @return $result;
}

TopBanner.module.scss
  .textLeft {
    padding: toVar(padding); // padding:var(--padding)
  }
  @include varMap(padding, paddingLeft, mobile);
  // --padding:20px;
    @include mobile {
      @include varMap(padding, paddingLeft, pc, 20px);
      // --padding:20px 100px;
    }
```

최종 개선

```
_variable.scss
$objects2: (
  header: (
    leftPadding: (
      mobile: 10px,
      pc: 100px,
    ),
  ),
);

_util.scss
@function mapDevice($object, $key, $device) {
  $result: map-get(map-get($objects2, $object), $key);
  @return #{map-get($result, $device)}; //map은 return이 안됨
}

@mixin auto($key, $area) {
  // #{$key}: #{mapDevice(nth($area, 1), nth($area, 2), mobile)};
  #{$key}: #{mapDevice(nth($area, 1), nth($area, 2), mobile)};
  @media screen and (min-width: 600px) {
    #{$key}: #{mapDevice(nth($area, 1), nth($area, 2), pc)};
  }
  // #{$key}: #{nth($area, 1)};
  // #{-- + $var};
} ;

_TopBanner.module.scss
  .textLeft {
    @include auto(padding-left, header leftPadding);
  }
```
