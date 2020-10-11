// Object()를 이용해서 foo 빈 객체 생성
let foo = new Object()

// foo 객체 프로퍼티 생성
foo.name = 'foo'
foo.age = 30
foo.gender = 'female'

console.log(typeof foo)
console.log(foo)

// 객체 리터럴 방식으로 객체 생성
let foo2 = {
  name: 'foo',
  age: 30,
  gender: 'female'
}

console.log(typeof foo2)
console.log(foo2)