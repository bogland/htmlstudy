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
