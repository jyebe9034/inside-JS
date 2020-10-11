function parent() {
  let a = 100

  // child() 내부 함수
  let child = function () {
    console.log(a)
  }

  // child() 함수 반환
  return child
}

// 실행이 끝난 parent()와 같은 부모 함수 스코프의 변수를 참조하는 inner()와 같은 함수를 '클로저'라고 한다.
let inner = parent()
inner() // 100