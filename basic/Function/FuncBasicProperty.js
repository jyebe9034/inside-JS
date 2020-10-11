// add() 함수 객체의 프로퍼티를 출력하는 코드(이 코드는 크롭에서 돌려야 볼 수 있음)
function add (x, y) {
  return x + y
}

console.dir(add)

// length 프로퍼티
function func0 () {

}

function func1 (x) {
  return x
}

function func2 (x, y) {
  return x + y
}

function func3 (x, y, z) {
  return x + y + z
}

console.log('func0.length - ', func0.length) // func0.length -  0
console.log('func1.length - ', func1.length) // func1.length -  1
console.log('func2.length - ', func2.length) // func1.length -  2
console.log('func3.length - ', func3.length) // func1.length -  3