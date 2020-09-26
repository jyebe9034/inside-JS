let foo = {
  name: 'foo',
  age: 30,
  major: 'computer science'
}

// for in 문을 이용한 객체 프로퍼티 출력
for (let prop in foo) {
  console.log(prop, foo[prop])
}

// result
// name foo
// age 30
// major computer science