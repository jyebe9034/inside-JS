// prototype 프로퍼티와 [[Prototype]]링크 구분
// Person 생성자 함수
function Person(name) {
  this.name = name
}

// foo 객체 생성
let foo = new Person('foo')

console.dir(Person)
console.dir(foo)

/** Person() 생성자 함수는 prototype 프로퍼티로 자신과 링크된 프로토타입 객체를 가리킨다. 그리고 앞서 설명한 자바스크립트의 객체 생성 규칙에 의하면
 * Person() 생서자 함수로 생성된 foo 객체는 Person() 함수의 프로토타입 객체를 [[Prototype]] 링크로 연결한다. 결국 prototype 프로퍼티나 [[Prototype]] 링크는 같은 프로토타입 객체를 가리키고 있다.
 * 
 * prototype 프로퍼티는 함수의 입장에서 자신과 링크된 프로토타입 객체를 가리키고 있으며, 이에 반해 [[Prototype]] 링크는 객체의 입장에서 자신의 부모 객체인 프로토타입 객체를 내부의 숨겨진 링크로 가리키고 있다.
 * 
 * 결국, 자바스크립트에서 객체를 생성하는 건 생성자 함수의 역할이지만, 생성된 객체의 실제 부모 역할을 하는 건 생성자 자신이 아닌 생성자의 prototyoe 프로퍼티가 가리키는 프로토타입 객체다.
 */