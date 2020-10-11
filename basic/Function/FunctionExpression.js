// add() 함수 표현식
let add = function (x, y) {
  return x + y
}

let plus = add

console.log(add(3, 4)) // 7
console.log(plus(4, 5)) // 9

// 기명 함수 표현식의 함수 호출 방법
let add2 = function sum(x, y) {
  return x + y
}

console.log(add2(3, 4)) // 7

// 에러가 발생하는 이유는 함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능하기 때문이다.
console.log(sum(4, 5)) // ReferenceError: sum is not defined

// 함수 표현식 방식으로 구현한 팩토리얼 함수
let factorialVar = function factorial(n) {
  if (n <= 1) {
    return 1
  }
  return n * factorial(n-1) // 함수 내부에서 일어나는 재귀 호출은 factorial() 함수 이름으로 처리 한다.
}

console.log(factorialVar(3)) // 6
console.log(factorial(3)) // ReferenceError: factorial is not defined