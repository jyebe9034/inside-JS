// 특정 함수에 사용자가 정의한 객체의 메서드 연결하기
function HelloFunc(func) {
  this.greeting = "hello"
}

HelloFunc.prototype.call = function(func) {
  func ? func(this.greeting) : this.func(this.greeting)
}

let userFunc = function(greeting) {
  console.log(greeting)
}

let objHello = new HelloFunc()
objHello.func = userFunc
objHello.call() // 실행결과 hello

/** 함수 HelloFunc는 greeting 변수가 있고, func 프로퍼티로 참조되는 함수를 call() 함수로 호출한다.
 * 사용자는 func 프로퍼티에 자신이 정의한 함수를 참조시켜 호출할 수 있다. 다만, HelloFunc.prototype.call()을 보면 알 수 있듯이
 * 자신의 지역변수인 greeting만을 인자로 사용자가 정의한 함수에 넘긴다.
 * 위의 코드에서는 userFunc() 함수를 정의하여 objHello.func()에 참조시킨 뒤, HelloFunc()의 지역변수인 greeting을 화면에 출력시킨다.
 */

function saySomething(obj, methodName, name) {
  return (function(greeting) {
    return obj[methodName](greeting, name)
  })
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name)
  return obj
}

newObj.prototype.who = function (greeting, name) {
  console.log(greeting + ' ' + (name || 'everyone'))
}

let obj1 = new newObj(objHello, 'zzoon')
obj1.call()

// 11.02 이해가 안가는데..?