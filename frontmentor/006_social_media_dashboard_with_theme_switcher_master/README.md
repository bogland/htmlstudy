## 트러블 리포트

component로 만들때는 한묶음으로 만들어야한다.

```
<section>
  <div>
  <Component>
</section>
문제점 : Component의 Margin-left를 넣고 싶어도 깔끔하게 넣을 수 있는 방법이 없음

해결방안 : 같은 depth는 component로 묶는다.
<section>
  <Comopnent>
</section>
```

### 레이아웃짤때

```
반응형이면서 카드형이 너비에 따라서 변경되는 경우엔 main 태그에서 max-width를 주고 width:100vw를 준다. flex의 경우엔 gap을 설정할 경우에 좌우 마진이 멋대로 설정된다. grid를 설정할 경우엔 자식에 flex를 줄 필요 없이 부모쪽에서 자식을 늘릴 수 있음

gap: 25px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

auto-fill인 경우 여유 공간이 있으면 늘어나고 여유 공간이 min에 지정된 크기를 초과하면 한칸 더 늘어나게 된다.
```
