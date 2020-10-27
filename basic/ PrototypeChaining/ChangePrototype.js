function Person (name) {
  this.name = name
}
console.log(Person.prototype.constructor) // [Function: Person]

let foo = new Person('foo')
console.log(foo.country) // undefined

// 디폴트 프로토타입 객체 변경
Person.prototype = {
  country: 'Korea'
}
console.log(Person.prototype.constructor) // [Function: Object]

let bar = new Person('bar')
console.log(foo.country) // undefined
console.log(bar.country) // Korea
console.log(foo.constructor) // [Function: Person]
console.log(bar.constructor) // [Function: Object]

// TODO 설명 추가 필요