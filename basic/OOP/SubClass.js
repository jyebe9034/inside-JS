let SuperClass = subClass(obj);
let SubClass = SuperClass.subClass(obj);

function subClass(obj) {

    let parent = this;
    let F = function() {};

    /* (1) 자식클래스 (함수 객체) 생성 */
    let child = function() {
    };

    /* (2) 생성자 호출 */
    /* (3) 프로토타입 체인을 활용한 상속 구현 */
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent.prototype;
    child.parent_constructor = parent;

    /* (4) obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가 */
    /* (5) 자식 함수 객체 반환 */
    return child;
}