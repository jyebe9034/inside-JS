function func (arg1, arg2) {
  console.log(arg1, arg2)
}

func() // undefined undefined
func(1) // 1 undefined
func(1, 2) // 1 2
func(1, 2, 3) // 1 2

/*  위에서 보는 것처럼 정의된 함수의 인자보다 적게 함수를 호출했을 경우, 넘겨지지 않은 인자에는 undefined가 할당된다. 
    반대로 정의된 인자 개수보다 많은 인자를 넘기면 초과된 인수는 무시된다.
    자바스크립트에서는 이러한 특성 때문에 함수코드를 작성할 때, 런타임시에 호출된 인자의 개수를 확인하고 이에 따라 동작을 다르게 해줘야 할 경우가 있다.
    이를 가능하게 하는 것이 arguments 객체다.
    자바스크립트에서는 함수를 호출할 때 인수들과 함께 암묵적으로 arguments 객체가 함수 내부로 전달되기 때문이다.
    arguments 객체는 함수를 호출할 때 넘긴 인자들이 배열의 형태로 저장된 객체를 의미한다.
    특이한 점은 이 객체는 실제 배열이 아닌 유사 배열 객체라는 점이다.
*/

// add() 함수
function add(a, b) {
  // arguments 객체 출력
  console.dir(arguments)
  return a + b
}

console.log(add(1)) // NaN
console.log(add(1, 2)) // 3
console.log(add(1, 2, 3)) // 3

// arguments 객체는 매개변수 갯수가 정확하게 정해지지 않은 함수를 구현하거나, 전달된 인자의 개수에 따라 서로 다른 처리를 해줘야 하는 함수를 개발하는데 유용하다.
function sum() {
  let result = 0

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)) // 45

