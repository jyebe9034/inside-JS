function Person(arg) {
    this.name = arg;
}

Person.prototype.setName = function(value) {
    this.name = value;
}

Person.prototype.getName = function() {
    return this.name;
}

function Student(arg) {
    Person.apply(this.arguments);
}

let you = new Person('hannah');
Student.prototype = you;

let me = new Student('jyebe');
me.setName('jyebe');
console.log(me.getName());