// 함수 선언문 방식과 함수 호이스팅
// 아직 이 시점에는 함수가 정의되지 않았음에도 아래에 선언된 함수를 호출하는 것이 가능하다. 
console.log(add(2, 3)) // 5

// 함수 선언문 형태로 add() 함수 정의
function add(x, y) {
  return x + y
}

console.log(add(3, 4)) // 7


// 함수 표현식 방식과 함수 호이스팅
console.log(plus(2, 3)) // ReferenceError: Cannot access 'plus' before initialization

let plus = function(x, y) {
  return x + y
}

console.log(plus(3, 4)) // 7