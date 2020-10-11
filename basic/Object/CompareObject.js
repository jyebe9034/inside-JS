let a = 100
let b = 100

let ObjectA = {
  value: 100
}

let ObjectB = {
  value: 100
}

let ObjectC = ObjectB

// a와 b는 기본타입의 변수이므로 각각의 값을 비교한다.
console.log(a == b) // true

// 기본타입의 경우 값을 비교하지만 객체의 경우엔 참조타입이 같아야 동등하다고 판단한다.
// 즉 ObjectA와 ObjectB의 값이 값더라도 각각 다른 객체이므로 비교했을 때 같지 않다고 출력된다.
console.log(ObjectA == ObjectB) // false
console.log(ObjectB == ObjectC) // true