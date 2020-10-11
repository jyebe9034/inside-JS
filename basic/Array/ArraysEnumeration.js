let arr = ['zero', 'one', 'two', 'red']
arr.color = 'blue'
arr.name = 'number_array'

// 배열외의 모든 프로퍼티 출력
for (const prop in arr) {
  console.log(prop, arr[prop])
}
// 0 zero
// 1 one
// 2 two
// 3 red
// color blue
// name number_array

// 배열의 요소만을 출력
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i])
}
// 0 zero
// 1 one
// 2 two
// 3 red