// 객체 리터럴 방식으로 foo객체 생성
let foo = {
  name: 'foo',
  major: 'computer science'
}

// 객체 프로퍼티 읽기
console.log(foo.name) // foo
console.log(foo['name']) // foo
console.log(foo.nickname) // undefined

// 객체 프로퍼티 갱신
foo.major = 'eletronics engineering'
console.log(foo.major) // eletronics engineering
console.log(foo['major']) // eletronics engineering

// 객체 프로퍼티 동적 생성
foo.age = 30
console.log(foo.age) // 30

// 대괄호 표기법만 사용해야 하는 경우
foo['full-name'] = 'foo bar'
console.log(foo['full-name']) // foo bar
console.log(foo.full-name) // ReferenceError: name is not defined, NaN(Not a Number)
// 위의 표현법은 우리의 의도와 다르게 undefined - undefined로 빼기연산이 일어나면서 NaN이 발생한다.

console.log(foo.full) // undefined
console.log(name) // ReferenceError: name is not defined

