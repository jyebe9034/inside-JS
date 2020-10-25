// 1. 일반함수나 메서드에서 리턴값을 지정하지 않은 경우
let noReturnFunc = function () {
  console.log('This function has no return statement')
}

let result = noReturnFunc()
console.log(result) // undefined

// 2. 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.

// 만약 생성자함수에서 this로 바인딩된 생성자 객체가 아닌 다른 객체를 리턴한다면 어떻게 될 것인가?
// Person() 생성자 함수 
function Person(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender

  // 명시적으로 다르 객체 반환
  return {name:'bar', age:20, gender:'female'}
}

let foo = new Person('foo', 30, 'female')
console.dir(foo) // { name: 'bar', age: 20, gender: 'female' }

// 생성자 함수에서 리턴값으로 객체가 아닌 숫자, 문자열, 불린을 넘기면 넘겨진 return값은 무시되고 this로 바인딩 된 객체가 리턴된다.
function Person2(name, age, gender) {
  this.name = name
  this.age = age
  this.gender = gender

  return 100
}

let bar = new Person2('bar', 30, 'female')
console.log(bar) // Person2 { name: 'bar', age: 30, gender: 'female' }