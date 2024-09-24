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
let obj1=new User1('홍길동',30)
console.log(`${obj1.name},${obj1.age}`)//undefined,undefined
//new를 사용했으므로 this는 준비됨(메모리 준비됨)
//그러나 함수내에 this내에는 아무것도 추가되지 않음->빈 상태의 객체
//객체내에는 name,age,sayHello()가 없다

//생성자 함수로 준비
function User2(name,age){
    this.name=name
    this.age=age
    this.sayHello=function(){
        console.log(`${this.name},${this.age}`)
    }

}
//일반함수 이용
User2('홍길동',20)//에러
//new를 이용하지 않았으므로 this가 준비되지 않았다->this사용시 에러발생

//객체생성으로 이용
//생성자함수를 선언하고 이 모형을 통해 동일 구조의 객체를 반복생성
let user1=new User2('홍길동',20)
let user2=new User2('홍길동',20)
user1.sayHello()
user1.sayHello()

