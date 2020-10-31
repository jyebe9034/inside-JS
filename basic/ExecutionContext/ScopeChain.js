// 예제 1
let value = "value1"

function printFunc() {
  let value = "value2"

  function printValue() {
    return value
  }

  console.log(printValue())
}

printFunc() // value2

// 예제 2
let valueStr = "value1"

function printValue2() {
  return valueStr
}
function printFunc2(func) {
  let valueStr = "value2"
  console.log(func())
}

printFunc2(printValue2) // value1