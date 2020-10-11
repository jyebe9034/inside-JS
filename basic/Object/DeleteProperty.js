// 객체 리터럴을 통한 foo 객체 삭제
let foo = {
  name: 'foo',
  nickname: 'babo'
}

console.log(foo.nickname) // babo
delete foo.nickname
console.log(foo.nickname) // undefined

delete foo
console.log(foo.name) // foo