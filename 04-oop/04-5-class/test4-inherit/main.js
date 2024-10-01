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



