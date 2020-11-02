function saySomething(obj, methodName, name) {
  return (function(greeting) {
    return obj[methodName](greeting, name)
  })
}

function newObj(obj, name) {
  obj.func = saySomething(this, 'who', name)
  return obj
}

newObj.prototype.who = function (greeting, name) {
  console.log(greeting + ' ' + (name || 'everyone'))
}

let obj1 = new newObj(objHello, 'zzoon')