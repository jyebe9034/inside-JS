// self() 함수 정의
let self = function () {
  console.log('a')
  return function () {
    console.log('b')
  }
}

self = self() // a
self() // b