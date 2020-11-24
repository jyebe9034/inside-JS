let inherit = function(Parent, Child) {
    let F = function() {};
    return function(Parent, Child) {
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.super = Parent.prototype;
    }
}

/**
 * 위의 코드에서 클로저(반환되는 함수)는 F() 함수를 지속적으로 참조함으로, F()는 가비지 컬렉터의 대상이 되지 않고 계속 남아있다.
 * 이를 이용해 함수 F()의 생성은 단 한번 이루어지고 inherit 함수가 계속해서 호출되어도 함수 F()의 생성을 새로 할 필요가 없다.
 */