//일반함수 선언 -this로 멤버준비되지 않은 경우
function User1(arg1,arg2){
    //함수내에 변수 및 함수가 선언되어 있다
    //함수scope내 선언된 함수의 로컬멤버이다
    let name=arg1
    let age=arg2
    let sayHello=function(){
        console.log(`User1,${arg1},${arg2}`)
    }
    sayHello()
}
//일반 함수로 호출->함수가 일반함수로 준비되어있으므로 문제없음
User1('홍길동',20)
//객체생성으로 호출
