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
let test = 'this is test' // 전역변수 선언. JS에서 전역변수는 전역객체(window)의 프로퍼티로 접근이 가능함!
console.log(window.test) // this is test

// sayFoo() 함수
let sayFoo = function () {
  console.log(this.test) // this is test
}

// JS에서는 함수를 호출할 때 this가 전역 객체에 바인딩 된다.
sayFoo()