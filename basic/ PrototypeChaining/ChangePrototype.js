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

/** 1. Person()함수를 생성할 때 디폴트로 같이 생성되는 Person.prototype 객체는 자신과 연결된 Person() 생성자 함수를 가리키는 constructor 프로퍼티만을 가진다.
 * 때문에 Person.prototype.constructor는 Person() 생성자 함수를 가리킨다.
 * 2. foo객체는 객체 생성 규칙에 따라 Person.prototype 객체를 자신의 프로토타입으로 연결한다. 그러나 foo객체는 country 프로퍼티가 없고 
 * 또한, 디폴트 프로토타입 객체 Person.prototype도 country 프로퍼티가 없으므로 undefined가 출력된다.
 * 3. 자바스크립트에서는 디폴트 프로토타입 객체 또한 변경이 가능하다. 여기서는 객체 리터럴 방식으로 생성한 country프로퍼티를 가진 객체로 프로토타입 객체(Person.prototype)를 변경했다.
 * 변경한 프로토타입 객체는 단지 country 프로퍼티가 있으므로, 디폴트 프로토타입 객체처럼 constructor 프로퍼티가 없다. 이 경우에도 똑같이 프로토타입 체이닝이 일어난다.
 * 변경한 프로토타입 객체는 객체 리터럴 방식으로 생성했으므로 Object.prototype을 [[Prototype]] 링크로 연결한다. 따라서 Object.prototype 객체로 프로토타입 체이닝이 발생한다.
 * Object.prototype 역시 Object() 생성자 함수와 연결된 빌트인 프로토타입 객체여서, Object() 생성자 함수를 constructor에 연결하고 있다. 
 * 따라서 Person.prototype.constructor의 값은 Object() 생성자 함수가 출력된다.
 * 4. bar 객체를 생성했다. 이때 Person() 생성자 함수의 prototype 프로퍼티는 디폴트 프로토타입 객체가 아닌 새로 변경된 프로토타입 객체를 가리키고 있다. 
 * 따라서 bar객체는 새로 변경된 프로토타입 객체를 [[Prototype]] 링크로 가리키게 된다.
 * 5. foo.constructor는 Person() 생성자 함수를 가리키지만, bar.constructor는 Object()를 가리킨다.
 */