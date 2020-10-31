let a = 1
let b = 2
function func() {
  let a = 10
  let b = 20
  console.log(a) // 10
  console.log(b) // 20
}
func()
console.log(a) // 1
console.log(b) // 2

/** 위의 코드를 실행하면 전역 실행 컨텍스트가 생성되고, func() 함수 객체가 만들어진다. 이 함수 객체의 [[scope]]는 어떻게 될까?
 * 함수 객체가 생성될 때, 그 함수 객체의 [[scope]]는 현재 실행되는 컨텍스트의 변수 객체에 있는 [[scope]]를 그대로 가진다. 
 * 따라서 func 함수의 객체의 [[scope]]는 전역 객체가 된다.
 */