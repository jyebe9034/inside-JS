function Person (name) {
  this.name = name
}

// getName() 프로토타입 메서드
Person.prototype.getName = function () {
  return this.name
}

let foo = new Person('foo')

console.log(foo.getName()) // foo
/** foo 객체에서 getName()을 호출하면, foo 객체에서 getName()을 찾을 수 없으므로 프로토타입 체이닝이 발생한다.
 * foo 객체의 프로토타입 객체인 Person.prototype에는 getName()이 있으므로 이 메서드가 호출된다.
 * 이때, getName() 메서드를 호출한 객체는 foo이므로, this는 foo객체에 바인딩 된다. 따라서 foo.getName()의 결과값으로 foo가 출력된다.
 */


// Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = 'person'

console.log(Person.prototype.getName()) // person
/** Person.prototype.getName() 메서드와 같이 프로토타입 체이닝이 아니라 Person.prototype 객체에 접근해서 getName()을 호출하면 어떻게 될까?
 * 이때, getName()을 호출한 객체가 Person.prototype 이므로 this도 여기에 바인딩 된다. 
 * 그리고 Person.prototype 객체에 name 프로퍼티를 동적으로 추가하고 'person'을 저장했으므로 this.name으로 person이 출력된다.
 */