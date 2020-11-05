// 주의사항 1.  클로저의 프로퍼티 값은 쓰기가 가능하므로 그 값이 여러번 호출되어 항상 변할 수 있음에 유의해야 한다.
function outerFunc(argNum) {
  let num = argNum
  return function(x) {
    num += x
    console.log('num: ' + num)
  }
}
let exam = outerFunc(40)
exam(5) // num: 45
exam(-10) // num: 35

// exam값을 호출할 때마다 자유변수 num의 값은 계속 변화하므로 주의해야 한다.

// 주의사항 2. 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다.
function func() {
  let x = 1
  return {
    func1: function() { console.log(++x) },
    func2: function() { console.log(-x) }
  }
}

let test = func()
test.func1() // 2
test.func2() // -2

// 반환되는 객체에는 두개의 함수가 정의되어 있는데, 두 함수 모두 자유 변수 x를 참조한다. 그리고 각각의 함수가 호출될 때마다 x값이 변화하므로 유의해야 한다.

// 주의사항 3. 루프 안에서 클로저를 활용할 때는 주의해야 한다.
function countSeconds(howMany) {
  for (let i = 1; i <= howMany; i++) {
    setTimeout(function() {
      console.log(i)
    }, i * 1000)
  }
}
countSeconds(3)

// 위의 코드로 의도대로 1초에 1씩 증가한 값이 나옴...뭐지..책에서는 이렇게 안나온다던데...ㅎ
// 아래의 코드처럼 해서 즉시 실행 함수로 해야 원하는 결과를 얻을 수 있다고 함..
// 근데 위든 아래든 다 잘나오는데...

function countSeconds2(howMany) {
  for (let i = 1; i <= howMany; i++) {
    (function (currentI) {
      setTimeout(function() {
        console.log(currentI)
      }, currentI * 1000)
    })(i)
  }
}
countSeconds2(3)