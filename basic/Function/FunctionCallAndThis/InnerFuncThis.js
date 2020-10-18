// 전역 변수 value 정의
// let value = 100

// // myObject 객체 생성
// let myObject = {
//   value: 1,
//   func1: function () {
//     this.value += 1
//     // 여기의 this는 메서드를 호출한 객체 myObject를 가리킨다.
//     console.log('func1() called. this.value : ' + this.value)

//     // func2() 내부 함수
//     func2 = function () {
//       this.value += 1
//       console.log('func2() called. this.value : ' + this.value)
  
//       // func3() 내부 함수
//       func3 = function () {
//         this.value += 1
//         console.log('func3() called. this.value : ' + this.value)
//       }
//       func3() // func3() 내부 함수 호출
//     }
//     func2() // func2() 내부 함수 호출
//   }
// }

// myObject.func1()
// func1() called. this.value : 2
// func2() called. this.value : NaN but, 책에서는 101
// func3() called. this.value : NaN 책에서는 102

// <문제 해결 후 코드>

// 전역 변수 value 정의
let value2 = 100

// myObject 객체 생성
let myObject2 = {
  value2: 1,
  func1: function () {
    let that = this
    this.value2 += 1
    // 여기의 this는 메서드를 호출한 객체 myObject를 가리킨다.
    console.log('func1() called. this.value : ' + this.value2)

    // func2() 내부 함수
    func2 = function () {
      that.value2 += 1
      console.log('func2() called. this.value : ' + that.value2)
  
      // func3() 내부 함수
      func3 = function () {
        that.value2 += 1
        console.log('func3() called. this.value : ' + that.value2)
      }
      func3()
    }
    func2()
  }
}

myObject2.func1()
// func1() called. this.value : 2
// func2() called. this.value : 3
// func3() called. this.value : 4