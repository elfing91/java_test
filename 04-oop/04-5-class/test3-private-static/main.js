//js에는 private라는 예약어가 없다
//oop에서 private라는 개념은 클래스 내에 선언된 멤버가 
//그 클래스 내에서만 사용되게 강제하는 기법을 말한다
class User{
    //private-외부와 결합도를 낮추어서 유지보수성 증대
    name;
    age;
    constructor(name,age){
        this.name=name
        this.age=age
    }
    #myFun(){
        console.log('muFun call')
    }
    sayHello(){
        console.log(`hello,${this.name},${this.age} `)
        this.#myFun()
    }

}
let user=new User('홍길동',20)
user.name='김길동'
user.age=30

user.sayHello()//hello,김길동,30 //myFun call

//user.#myFun()//에러

