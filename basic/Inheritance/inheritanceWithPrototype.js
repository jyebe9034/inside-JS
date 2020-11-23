function create_object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let person = {
    name: 'hannah',
    getName: function() {
        return this.name;
    },
    setName: function(arg) {
        this.name = arg;
    }
}

let student = create_object(person);

student.setName('me');
console.log(student.getName()); // me