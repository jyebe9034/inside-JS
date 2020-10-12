// myObject 객체 생성
let myObject = {
  name: 'foo',
  sayName: function () {
    console.log(this.name)
  }
}

// otherObject 객체 생성
let otherObject = {
  name: 'bar'
}

// otherObject.sayName() 메서드 
otherObject.sayName = myObject.sayName

// sayName() 메서드 호출
myObject.sayName() // foo
otherObject.sayName() // bar

// 함수를 호출할 때 this 바인딩을 보여주는 예제코드
let test = 'this is test'
console.log(window.test) // this is test

// sayFoo() 함수
let sayFoo = function () {
  console.log(this.test) // this is test
}

sayFoo()