let SuperClass = subClass(obj);
let SubClass = SuperClass.subClass(obj);

function subClass(obj) {
    let parent = this === window ? Function : this;
    let F = function() {};

    /* (1) 자식클래스 (함수 객체) 생성 */
    let child = function() {
        let _parent = child.parent;

        if (_parent && _parent !== Function) {
            _parent.apply(this, arguments);
        }
        if (child.prototype.hasOwnProoerty('_init')) {
            child.prototype._init.apply(this, arguments);
        }
    };

    /* (2) 생성자 호출 */
    /* (3) 프로토타입 체인을 활용한 상속 구현 */
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent;
    child.subClass = arguments.callee;

    /* (4) obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가 */
    for (let i in obj) {
        if (obj.hasOwnProoerty(i)) {
            child.prototype[i] = obj[i];
        }
    }

    /* (5) 자식 함수 객체 반환 */
    return child;
}