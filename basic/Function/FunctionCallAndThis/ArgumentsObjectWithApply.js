/** 이 코드는 myFunction() 함수에 최초로 전달된 인자에서 첫번째 요소를 삭제하고
 * 나머지 인자를 다시 내부 함수 inner()로 전달하는 예제다. */

function myFunction() {
  console.dir(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3 }

  // arguments.shift() // TypeError: arguments.shift is not a function

  // arguments 객체를 배열로 반환
  let args = Array.prototype.slice.apply(arguments)
  console.log(args) // [ 1, 2, 3 ]
}

myFunction(1, 2, 3)

/**
 * Array.prototype.slice.apply(arguments)를 해석하면 다음과 같다.
 * 'Array.prototype.slice()를 호출해라. 이때, this는 arguments객체로 바인딩해라.'
 * 이 말은 arguments객체가 'Array.prototype.slice() 메서드를 마치 자신의 메서드인 양 arguments.slice()와 같은 형태로 호출하라는 것이다. 
 */