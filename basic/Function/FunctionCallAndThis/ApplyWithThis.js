// 생성자 함수
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender
}

// foo 빈 객체 생성
let foo = {}

// apply()메서드 호출
Person.apply(foo, ['foo', 30, 'male'])
console.dir(foo) // { name: 'foo', age: 30, gender: 'male' }
/** apply() 메서드를 사용해서 Person() 함수를 호출한 코드다. 첫번째 인자로 넘긴 foo가 Person() 함수에서 this로 바인딩 된다.
 * 그리고 apply() 메서드의 두번째 인자로 넘긴 배열 ['foo', 30, 'male']은 호출하려는 PErson함수의 인자로 전달된다.
 * 이 코드는 Person('foo', 30, 'male')함수를 호출하면서, this를 foo객체에 명시적으로 바인딩하는 것을 의미하는 것이다. */ 
