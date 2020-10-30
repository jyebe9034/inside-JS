console.log('This is global context')

function ExContext1() {
  console.log('This is ExContext1')
}

function ExContext2() {
  ExContext1()
  console.log('This is ExContext2')
}

ExContext2()
/** 실행결과
 * This is global context
This is ExContext1
This is ExContext2
 */