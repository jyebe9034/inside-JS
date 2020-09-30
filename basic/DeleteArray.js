let arr = ['zero', 'one', 'two', 'three']

// delete 연산자 이용
delete arr[2]
console.log(arr) // [ 'zero', 'one', <1 empty item>, 'three' ]
console.log(arr.length) // 4

// splice() 메서드 이용
arr.splice(2, 1)
console.log(arr) // [ 'zero', 'one', 'three' ]
console.log(arr.length) // 3