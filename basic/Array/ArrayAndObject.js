// colorsArray 배열
let colorsArray = ['orange', 'yellow', 'green']
console.log(colorsArray[0]) // orange
console.log(colorsArray[1]) // yellow
console.log(colorsArray[2]) // green

// colorsObj 객체
let colorsObj = {
  '0': 'orange',
  '1': 'yellow',
  '2': 'green'
}
// 원래대로라면 colorsObj[0]에서 0을 '0'으로 써야 하지만 자바스크립트 엔진이 []연산자 내부의 숫자를 문자열로 바꿔준다. 
console.log(colorsObj[0]) // orange
console.log(colorsObj[1]) // yellow
console.log(colorsObj[2]) // green

// typeof 연산자 비교
console.log(typeof colorsArray) // object
console.log(typeof colorsObj) // object

// length 프로퍼티
console.log(colorsArray.length) // 3
console.log(colorsObj.length) // undefined

// 배열 표준 메서드
colorsArray.push('red')
console.log(colorsArray) // [ 'orange', 'yellow', 'green', 'red' ]

colorsObj.push('red') // TypeError: colorsObj.push is not a function
