let arr = ['bar']
let obj = {
  name: 'foo',
  length: 1
}

arr.push('baz')
console.log(arr) // [ 'bar', 'baz' ]

// 첫번째
// obj.push('baz') // TypeError: obj.push is not a function

// 두번째
Array.prototype.push.apply(obj, ['baz'])
console.log(obj) // { '1': 'baz', name: 'foo', length: 2 }