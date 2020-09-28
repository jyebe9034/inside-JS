// 배열 리터럴을 통한 배열 생성
let colorArr = ['orange', 'yellow', 'blue', 'green', 'red']
console.log(colorArr[0]) // orange
console.log(colorArr[1]) // yellow
console.log(colorArr[4]) // red

// 배열 요소의 동적 생성
let emptyArr = []
console.log(emptyArr[0]) // undefined

// 배열 요소 동적 생성
emptyArr[0] = 100
emptyArr[2] = 'eight'
emptyArr[5] = true
console.log(emptyArr) // [ 100, <1 empty item>, 'eight', <2 empty items>, true ]
console.log(emptyArr.length) // 6