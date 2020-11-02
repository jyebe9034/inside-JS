function outerFunc() {
  let x = 10
  let innerFunc = function() {
    console.log(x)
  }
  return innerFunc
}

let inner = outerFunc()
inner() // 10s

function outerFunc2(arg1, arg2) {
  let local = 8
  function innerFunc2(innerArg) {
    console.log((arg1 + arg2)/(innerArg + local))
  }
  return innerFunc2
}
let exam1 = outerFunc2(2, 4)
exam1(2) // 0.6