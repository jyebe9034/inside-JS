let arr = ['zero', 'one', 'two']

// push() 메서드 호출
arr.push('three')
console.log(arr) // [ 'zero', 'one', 'two', 'three' ]

arr.length = 5
arr.push('four')
console.log(arr) // [ 'zero', 'one', 'two', 'three', <1 empty item>, 'four' ]