// 동일한 객체를 참조하는 두 변수 ObjectA와 ObjectB
let ObjectA = {
  value: 40
}
let ObjectB = ObjectA

console.log(ObjectA.value) // 40
console.log(ObjectB.value) // 40

ObjectB.value = 50
console.log(ObjectA.value) // 50
console.log(ObjectB.value) // 50

// ObjectA와 ObjectB는 동일한 객체를 참조하고 있으므로 둘 중 하나의 값을 변경하면 둘다 변경된다.