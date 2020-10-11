// 1. 함수 선언 방식으로 add() 함수 정의
function add(x, y) {
  return x + y
}

// add() 함수 객체에 result, status 프로퍼티 추가
add.result = add(2,3)
add.status = 'OK'

console.log(add.result) // 5
console.log(add.status) // OK

// 2. 함수릂 변수나 프로퍼티의 값으로 할당
let foo = 100

// 변수에 할당
let bar = function () { return 100 }
console.log(bar()) // 100

// 프로퍼티에 할당
let obj = {}
obj.baz = function () { return 200 }
console.log(obj.baz()) // 200

// 3. 함수를 다른 함수의 인자로 넘긴 코드
let test = function(func) {
  func() // 인자로 받은 함수 호출
}

// test() 함수 실행
test(function () {
  console.log('Function can be used as the argument')
})

// 4. 함수를 다른 함수의 리턴값으로 활용
let test2 = function () {
  return function () {
    console.log('this function is the return value')
  }
}

let myTest = test2()
myTest()