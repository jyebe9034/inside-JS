// 예제1.
let Person = function(arg) {
    let name = arg ? arg : 'jyebe';
    
    return {
        getName : function() {
            return name;
        },
        setName : function(arg) {
            name = arg;
        }
    }
}

let me = new Person();
console.log(me.getName()); // jyebe
/**
 * 예제1 코드처럼 메서드가 담겨있는 객체를 반환하는 함수는 여러 유명 자바스크립트 라이브러리에서 쉽게 볼 수 있는 구조이다.
 * 사용자는 반환받은 객체로 메서드를 호출할 수 있고, private멤버에 접근할 수 있다.
 * 다만, 접근하는 private 멤버가 객체이거나 배열이면 얕은 복사로 참조만을 반환하므로 사용자가 쉽게 변경할 수 있다.
 * 아래의 예제를 보면 쉽게 이해할 수 있다.
 */

 // 예제2.
let ArrCreate = function(arg) {
    let arr = [1,2,3];

    return {
        getArr: function() {
            return arr;
        }
    }
}

let obj = ArrCreate();
let arr = obj.getArr();
arr.push(5);
console.log(obj.getArr()); // [ 1, 2, 3, 5 ]

/** 
 * 이런 문제때문에 보통의 경우, 객체를 반환하지 않고 객체의 주요정보를 새로운 객체에 담아서 반환하는 방법을 많이 사용한다.
 * 하지만 꼭 객체가 반환되어야 하는 경우에는 깊은 복사로 복사본을 만들어 반환하는 방법을 사용하는것이 좋다.
 */

 /** 예제 1에서 사용자가 반환받은 객체는 Person 함수 객체의 프로토타입에는 접근할 수 없다는 단점이 있다.
  * 이를 보완하려면 객체가 아닌 함수를 반환하는 것이 좋다.
  */

let Person2 = function(arg) {
    let name = arg || 'jyebe';

    let Func = function() {
        Func.prototype = {
            getName : function() {
                return name;
            },
            setName : function(arg) {
                name = arg;
            } 
        }
    }
    return Func;
}();

let me2 = new Person2();
console.log(me.getName());

/** 
 * 예제 3에서도 클로저를 활용하여 name에 접근할 수 없게 했다. 즉시 실행 함수에서 반환되는 Func가 클로저가 되고
 * 이를 참조하는 name 프로퍼티가 자유 변수가 된다. 따라서 사용자는 name에 대한 접근이 불가능하다.
 */