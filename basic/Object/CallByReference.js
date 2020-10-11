let a = 100
let ObjectA = {
  value: 100
}

function changeArg(num, Obj) {
  num = 200
  Obj.value = 200

  console.log(num) // 200
  console.log(Obj) // { value: 200 }
}

changeArg(a, ObjectA)

console.log(a) // 100
console.log(ObjectA) // { value: 200 }