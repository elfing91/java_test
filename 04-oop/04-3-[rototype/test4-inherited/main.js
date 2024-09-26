//공통 코드를 개발하는 개발자 입장에서 다른 개발자들이 만드는
//모든 도형에 공통으로 들어가는 멤버
function Shape(name){

    this.name=name//생성자함수
    //new Shape()로 객체를 생성하면 자동으로 객체가 생성되고
    //생성자 함수를 거치면서 그 객체에 변수, 함수가 등록된다
    //객체생성 시점에 자동으로 만들어지는 객체를 지칭
}
Shape.prototype.draw=function(){
    console.log(`${this.name}도형을 그립니다`)
}//드로잉 프로토타입

console.dir(new Shape('react1'))

function Rectangle(name,width,height){
    //name데이터가 객체에 유지되어야 함
    //객체별로 name데이터가 다르게 유지된다면=>this에 등록
    // this.name=name =>객체별로 데이터 유지

    //다른 생성자 함수에 name이 작성되고 이를 이용
    //자신이 호출되어 객체가 생성될때 다른 생성자 함수도 함께 호출되어
    //자신의 this에 그 생성자 함수에 등록된 멤버가 들어오도록
    Shape.apply(this,[name]) //shape생성자 함수 호출->name을 매개변수로 지전 

    //width,height데이터가 객체에 유지되어야 한다
    //객체 여러개에 공통값인가->prototype에 등록
    //객체별로 다르게 유지되어야 하는 값인가->this에 등록
    this.width=width
    this.height=height

}

let rect1=new Rectangle('react1',100,200)
console.log(rect1.name,rect1.width,rect1.height)//react1 100 200
