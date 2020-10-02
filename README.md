# inside-JS

### 자바 스크립트의 핵심 개념
1. 객체: null과 undefined를 제외한 모든것을 객체로 다룰 수 있다.
2. 함수: 자바스크립트에서는 함수도 객체로 취급한다.
3. 프로토타입: 모든 객체느 숨겨진 링크인 프로토타입을 갖는다. 이 프로토타입을 활용해 상속을 구현한다.
4. 실행 컨텍스트와 클로저: 실행 컨텍스트는 자신만의 유효범위(scope)을 갖는데, 이 과정에서 클로저를 구현할 수 있다.

### 자바스크립트의 타입과 관련된 특징(Object.js)
* typeof 연산자 : 피연산자의 타입을 리턴
* 자바스크립트에서는 모드 숫자를 실수로 처리함. 따라서, 정수부분만을 원할 경우 Math.floor(num)를 사용하면 됨.
* 자바스크립트에서는 한번 생성된 문자열은 읽기만 가능하고 수정은 불가능.
* null과 undefined는 '값이 비어있음'을 나타냄.
* undefined는 타입이자 값이며, null을 typeof 연산으로 보면 Object로 나온다. 따라서 null타입의 변수인지를 확인하기 위해서는 일치 연산자(===)를 사용해야 함.
* 자바스크립트의 객체 생성방법은 다른 언어들과 다르게 클래스라는 개념이 없고, 객체 리터럴이나 생성자 함수 등 별도의 생성방식이 존재한다.
* 자바스크립트에서는 존재하지 않는 프로퍼티에 접근할 경우 undefined값이 출력된다.


### 객체를 생성하는 3가지 방법(Object.js, ForInObject.js)
1. 기본 제공 Object() 객체 생성자 함수 이용
2. 객체 리터럴을 사용
3. 생성자 함수 이용

### 객체 프로퍼티 읽기/쓰기/갱신(AccessProperty.js)
* 객체의 프로퍼티에 접근하려면 대괄호([])나 마침표(.)를 사용하면 된다.
  - 대괄호 표기법인 경우 접근하려는 프로퍼티 명을 문자열로 표기해야 한다. ex) foo['name']
  - 대괄호 표기법만을 이용해야 하는 경우가 있다.
    + 접근하려는 프로퍼티가 표현식이거나 예약어일 경우이다. 접근하려는 프로퍼티가 'full-name'일 경우 '-'연산자가 있는 표현식이므로 대관호 표기법만을 이용해서 접근해야 한다.
> 자바스크립트 객체의 프로퍼티에 값을 할당할 때, 프로퍼티가 이미 있을 경우는 해당 프로퍼티의 값이 갱신되지만, 객체에 해당 프로퍼티가 없는 경우에는 새로운 프로퍼티가 생성된 후 값이 할당된다.

### 객체 프로퍼티 삭제(DeleteProperty.js)
* delete 연산자를 이용하면 객체의 프로퍼티를 삭제할 수 있다.
* 그러나 delete 연산자로 객체 자체를 삭제하지는 못한다.

### 참조 타입의 특성(ReferenceType.js)
* 자바스크립트에서는 기본타입인 숫자, 문자열, 불린값, null, undefined를 제외한 모든 값은 객체다.
* 배열이나 함수 역시 객체로 취급된다.
* 이러한 객체들을 참조타입이라고 부른다.


### 객체비교(CompareObject.js)
* 동등연산자(==)은 두 객체를 비교할 때 객체의 프로퍼티값이 아닌 참조값을 비교한다는 점을 주의해야 한다.

### 참조에 의한 함수 호출 방식 Call By Reference(CallByReference.js)
* 기본타입의 경우 값에 의한 호출 Call By Value 방식으로 동작한다.
  - 즉, 함수를 호출할 때 인자로 기본타입을 넘길 경우, 호출된 함수의 매개변수로 '복사된 값'이 전달된다.
  - 때문에 함수 내부에서 매개변수를 이용해 값을 변경해도 실제로 호출한 변수의 값이 변경되지는 않는다.
* 객체와 같은 참조타입의 경우 함수를 호출할 때 참조에 의한 호출 Call By Refernece 방식으로 동작한다.
  - 즉, 함수를 호출할 때 인자로 참조타임을 넘길 경우, 인자로 넘긴 객체의 참조값을 매개변수도 같이 참조하게 된다. 
  - 때문에 함수 내부에서 참조값을 이용해서 인자로 넘긴 실제 객체의 값을 변경할 수 있다.

### 프로토타입(Prototype.js)
* 자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
* 이러한 부모객체를 프로토타입 객체(프로토타입)라고 부른다.
* ECMAScript 명세서에는 자바스크립트의 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]라는 숨겨진 프로토타입을 가진다고 설명하고 있다.
* 크롬브라우저에서는 [[Prototype]] 대신 __proto__라고 표기한다.
* 객체를 생성할 때 결졍되는 프로토타입 객체는 임의로 다른 객체로 변경하는 것도 가능하다. 즉, 부모 객체를 동적으로 변경할 수 있다는 뜻이다.(프로토타입 체이닝 부분에서 자세히 다룸)

### 배열(ArrayLiteral.js)
* 자바스크립트의 배열은 크기를 지정하지 않아도 되고, 어느 위치에 특정한 타입의 데이터를 저장하더라도 에러가 발생하지 않는다.
* 객체가 동적으로 프로퍼티를 추가할 수 있듯이, 배열도 동적으로 배열 원소를 추가 할 수 있다.

### 배열의 길이(ArrayLength.js)
* 모든 배열은 length 프로퍼티를 가지고 있다.
* length 프로퍼티는 배열의 원소의 개수를 나타내지만, 실제로 배열에 존재하는 원소의 개수와 일치하는 것은 아니다.
* length 프로퍼티는 배열 내에 가장 큰 인덱스에 +1을 한 값이다.
* length 프로퍼티는 코드를 통해 명시적으로 값을 변경할 수도 있다.

### 배열의 표준 메서드(ArrayStandardMethod.js)
* 배열 메서드는 length 프로퍼티를 기반으로 동작하고 있다.
* push(): 인수로 넘어온 항목을 배열의 끝(length 프로퍼티)에 추가하는 메서드

### 배열과 객체(ArrayAndObject.js)
* 배열과 객체는 모두 object 타입이다.
* 당연한 말이겠지만 객체에는 length 프로퍼티가 존재하지 않는다.
* 배열의 프로토타입은 Array.prototype이므로 배열 표준 메서드를 사용할 수 있다.
* 객체의 프로토타입은 Object.prototype이므로 배열 표준 메서드를 사용할 수 없다.

### 배열의 프로퍼티 동적 생성(ArrayDynamicBinding.js)
* 자바스크립트의 배열은 객체이므로 인덱스가 숫자인 배열 원소 이외에도 객체처럼 동적으로 프로퍼티를 추가할 수 있다.
* 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우에만 변경된다.
* 배열에 동적 프로퍼티가 추가된 경우에는 인덱스가 변경되지 않는다.

### 배열의 프로퍼티 열거(ArraysEnumeration.js)
* 객체는 for in 문으로 프로퍼티를 열거한다. 배열도 객체이므로 for in 문을 이용해 프로퍼티를 열거할 수 있다.
* for in 문으로 배열의 프로퍼티를 열거하는 경우 불필요한 프로퍼티가 출력될 수 있으므로 되도록 for 문을 쓰는게 좋다.

### 배열 요소 삭제(DeleteArray.js)
* 배열 요소나 프로퍼티를 삭제할 때 delete 연산자를 사용할 수 있다.
* delete로 배열의 요소를 삭제하면 기존 값 대신 undefined를 사용할 뿐 length의 값은 변하지 않는다.
* 따라서 배열의 요소들을 완전히 삭제할 경우 splice() 배열 메서드를 사용한다.
  - splice(start, deleteCount, item...)
    + start: 배열에서의 시작 위치
    + deleteCount: start에서 지정한 시작 위치부터 삭제할 요소의 수
    + item: 삭제할 위치에 추가할 요소

### Array() 생성자 함수(ArrayConstruct.js)
* 생성자 함수로 객체를 생성할 때는 반드시 new 키워드를 같이 써야 한다.
* Array() 생성자 함수는 호출할 때의 인자 개수에 따라 동자깅 다르므로 주의해야 한다.
  - 호출할 때 인자가 1개이고, 숫자일 경우: 호출된 인자를 length로 갖는 빈 배열 생성
  - 그 외의 경우: 호출된 인자를 요소로 갖는 배열 생성

### 유사 배열 객체(ArrayLikeObjects.js)
* 자바스크립트에서는 length 프로퍼티를 가진 객체를 '유사 배열 객체'라고 부른다.
* 유사 배열 객체의 가장 큰 특징은 객체임에도 불구하고, 자바스크립트의 표준 배열 메서드를 사용하는게 가능하다는 점이다.

### 기본 타입과 표준 메서드(PrimitiveTypeAndStandardMethod.js)
* 기본 타입의 값들에 대해 객체 형태로 메서드를 호출할 경우, 이 기본값들은 메서드 처리 순간에 객체로 변환된 다음 각 타입별 표준 메서드를 호출하게 된다. 그리고 메서드 호출이 끝나면 다시 기본값으로 복귀하게 된다.

### +연산자
* +연산자는 숫자의 더하기 연산과 문자열 연결 연산을 수행한다.

### typeof 연산자
* typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴한다. 
* null과 배열이 'object'라는 것과 함수는 'function'이라는 점에 주의해야 한다.
  - 숫자: 'number'
  - 문자열: 'string'
  - 불린값: 'boolean'
  - null: 'object'
  - undefined: 'undefined'
  - 객체: 'object'
  - 배열: 'object'
  - 함수: 'function'

### ==(동등) 연산자와 ===(일치) 연산자
* 동등 연산자(==)는 피연산자의 타입이 다를 경우에 타입 변환을 거친 다음 비교한다.
* 일치 연산자(===)는 피연산자의 타입이 다를경우에 타입을 변경하지 않고 비교한다.
  - 1 == '1'은 true를 리턴
  - 1 === '1'은 false를 리턴