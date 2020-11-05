function callLater(obj, a, b) {
  return (function() {
    obj["sum"] = a + b
    console.log(obj["sum"])
  })
}

let sumObj = {
  sum: 0
}

let func = callLater(sumObj, 1, 2)
setTimeout(func, 500)