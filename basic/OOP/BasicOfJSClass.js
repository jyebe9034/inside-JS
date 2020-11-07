function Person(arg) {
  this.name = arg

  this.getName = function() {
    return this.name
  }

  this.setName = function(value) {
    this.name = value
  }
}

let me = new Person("hannah")
console.log(me.getName()) // hannah

me.setName("jyebe")
console.log(me.getName()) // jyebe

/** 위의 예제는 Person 함수의 구현이 바람직하지 않다. 아래의 예제를 보자. */

let you = new Person("you")
let him = new Person("him")
let her = new Person("her")

/** 위의 코드처럼 각 객체는 자기영역에서 공통적으로 사용할 수 있는 setName과 getName 을 따로 생성한다.
 * 이는 불필요하게 중복되는 영역을 메모리에 올려놓는 것으로 자원 낭비를 가져온다.
 */

/** 위의 문제를 해결하기 위한 개념이 <함수 객체의 프로토타입>이다. */
function Person2(arg) {
  this.name = arg
}

Person.prototype.getName = function() {
  return this.name
}

Person.prototype.setName = function(value) {
  this.name = value
}

let hannah = new Person("hannah")
let jyebe = new Person("jyebe")
console.log(hannah.getName())
console.log(jyebe.getName())

/** 이렇게 하면 각 객체가 따로 함수를 생성할 필요가 없이 프로토타입 체인으로 setName과 getName에 접근할 수 있다.
 * 이와같이 자바스크립트에서 클래스 안의 메서드를 정의할 때는 프로토타입 객체에 정의한 후, new로 생성한 객체에서 접근할 수 있도록 하는 게 좋다.
 */

/** 더글라스 크락포드는 다음과 같은 함수를 제시하면서 메서드를 정의하는 방법을 소개한다. 
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func
  }
}
*/


/** 더글라스가 제안한 함수를 이용하면 위의 예제를 아래처럼 바꿀 수 있다. */
Function.prototype.method = function(name, func) {
  this.prototype[name] = func
}

function Person3(arg) {
  this.name = arg
}

Person3.method("setName", function(value) {
  this.name = value
})

Person3.method("getName", function() {
  return this.name
})

let jihye = new Person3("jihye")
let jihye2 = new Person3("jihye2")
console.log(jihye.getName())
console.log(jihye2.getName())
