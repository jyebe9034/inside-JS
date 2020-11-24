/** 객체 리터럴 방식의 프로토타입 체이닝 */
let myObject = {
  name: 'foo',
  sayName: function () {
    console.log('My Name is ' + this.name)
  }
}

myObject.sayName() // My Name is foo
console.log(myObject.hasOwnProperty('name')) // true
console.log(myObject.hasOwnProperty('nickName')) // false
myObject.sayNickName() // TypeError: myObject.sayNickName is not a function

/** 생성자 함수 방식의 프로토타입 체이닝 */ 
function Person(name, age, hobby) {
  this.name = name
  this.age = age
  this.hobby = hobby
}

let foo = new Person('foo', 30, 'tennis')

// 프로토타입 체이닝
console.log(foo.hasOwnProperty('name')) // true

console.dir(Person.prototype) // Person {}