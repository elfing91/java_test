//공통 코드를 개발하는 개발자 입장에서 다른 개발자들이 만드는
//모든 도형에 공통으로 들어가는 멤버
function Shape(name){
    this.name=name

}
Shape.prototype.draw=function(){
    console.log(`${this.name}도형을 그립니다`)
}//드로잉 프로토타입

console.dir(new Shape('react1'))
