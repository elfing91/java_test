let obj={
    name:'홍길동',

}

//생성자 함수가 아닌 이상 객체에 동적바인딩 되어 실행될
//함수가 아닌 이상 함수내에 this는 안쓰는게 좋다
let sayHello=function(){
    console.log(`hello,${this.name}`)
}


