// parent() 함수 정의
function parent() {
  let a = 100
  let b = 200

  // child() 내부 함수 정의
  function child() {
    let b = 300

    console.log(a) // 부모 함수의 변수 a에 접근해서 출력
    console.log(b) // 자신의 함수 내부의 b 값을 출력
  }
  child()
}

parent() // console.log(a) -> 100과 console.log(b) -> 300 출력

child() // ReferenceError: child is not defined
// 내부 함수는 부모 함수 외부에서 호출하는 것이 불가능하다!!
