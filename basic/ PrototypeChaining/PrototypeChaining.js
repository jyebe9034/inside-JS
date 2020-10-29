function Person (name) {
  this.name = name
}

Person.prototype.country = 'Korea'

let foo = new Person('foo')
let bar = new Person('bar')
console.log(foo.country) // Korea
console.log(bar.country) // Korea
foo.country = 'USA'

console.log(foo.country) // USA
console.log(bar.country) // Korea

