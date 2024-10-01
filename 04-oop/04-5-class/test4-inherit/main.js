//상속은 부모에 선언된 멤버를 자식이 이용가능한 것을 말한다
class Shape{
    name='도형'
    x=0
    y=0
    draw(){
        console.log(`${this.name}을 ${this.x},${this.y}에그립니다`)
    }
}

class Rect extends Shape{
    width=0
    height=0
}

let rect=new Rect()
rect.name='사각형'
rect.x=10
rect.y=10
rect.height=100
rect.width=100
rect.draw()//사각형을 10,10에 그립니다

//test2-private,static 상속관계
class Super{
    data1=10
    #data2=20
    static data3=30
}
class Sub extends Super{
    static data4=40
    subFun(){
        console.log(this.data1)
       // console.log(this.#data2)//에러-private는 자신의 클래스에서만 사용가능
        //private는 상속안됨->하위 클래스에서 사용불가

    } 
}
let obj=new Sub()
obj.subFun()//10

console.log(Super.data3)//30 -> 자기껄 자기이름으로 호출하니 에러없음
console.log(Sub.data3)//30 -> 자기껄 자기이름으로 호출하니 에러없음
//상위 static멤버를 하위 클래스명으로 이용가능하다

//정리
//private는 상속불가, static은 상속가능



//test3-생성자 연결관계
//1) 생성자를 명시적으로 선언하지 않으면 
//default생성자가 자동으로 추가되어 문제없이 객체생성됨
// class Super1{

// }
// class Sub1 extends Super1{

// }
// let obj1=new Sub1() ->문제없음

//2) 개발자가 명시적으로 생성자 추가
class Super1{
    constructor(){}

}
class Sub1 extends Super1{
    //constructor(){}->에러!
    //생성자를 명시적으로 선언하면 에러 발생

    constructor(){
        super()//상위 생성자 호출구문->생성자 내에서만 작성가능
    }
    //개발자가 명시적으로 생성자를 추가했고 상위 클래스가 명시되어 있다면
    //생성자내에서 반드시 상위 생성자 호출해야 함

    constructor(){

        super()//this는 생성자 내에서 첫줄에 한번만 추가한다
    }
}
let obj1=new Sub1()



