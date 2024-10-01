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