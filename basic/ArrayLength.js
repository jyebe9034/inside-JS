let arr = []
console.log(arr.length) // 0

arr[0] = 0 // arr.length = 1
arr[1] = 1 // arr.length = 2
arr[2] = 2 // arr.length = 3
arr[100] = 100
console.log(arr.length) // 101

// length 프로퍼티의 명시적 변경
let array = [0,1,2]
console.log(array.length) // 3

array.length = 5
console.log(array) // [ 0, 1, 2, <2 empty items> ]

array.length = 2
console.log(array) // [ 0, 1 ]
console.log(array[2]) // undefined