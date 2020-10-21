// Person() 생성자 함수
let Person = function (name) {
  // 함수 코드 실행 전
  this.name = name
  // 함수 리턴
}

// foo 객체 생성
let foo = new Person('foo')
console.log(foo.name) // foo

// 객체 생성의 두가지 방법(객체 리터럴 & 생성자 함수)
// 객체 리터럴 방식으로 bar객체 생성
let bar = {
  name: 'bar',
  age: 20,
  gender: 'female'
}
console.dir(bar) // { name: 'bar', age: 20, gender: 'female' } 이건 크롬에서 찍어보면 그냥 Object 객체로 나옴

// 생성자 함수
function Person2(name, age, gender, position) {
  this.name = name
  this.age = age
  this.gender = gender
}

// Person 생성자 함수를 이용해 shelly, jordy 객체 생성
let shelly = new Person2('shelly', 25, 'women')
console.dir(shelly) // Person { name: 'shelly' } 이건 크롬에서 Person2 객체로 나옴

let jordy = new Person2('jordy', 26, 'women')
console.dir(jordy) // Person { name: 'jordy' } 이건 크롬에서 Person2 객체로 나옴

// new없이 생성자 함수 호출 시 오류(크롬에서 봐야함)
let qux = Person2('qux', 20, 'women')
console.log(qux) // undefined

console.log(window.name) // qux
console.log(window.age) // 20
console.log(window.gender) // women

