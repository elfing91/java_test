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

// static test
//클래스는 객체의 모형이다. 클래스의 대부분 멤버는 객체메모리에 할당되어야 하는 객체 멤버
//선별적으로 메모리 할당이 필요없는 멤버엔, static예약어를 붙암
class MyClass{
    data1=10
    static data2=20
    myFun1(){
        console.log(`myFun1 call,${this.data1},${this.data2} `)

    }
   static myFun2(){
        console.log(`myFun1 call,${this.data1},${this.data2} `)

    }
}
//static 멤버접근, 객체생성없이 클래스명으로 접근함
MyClass.myFun2()//myFun1 call,undefined,20 
console.log(MyClass.data2)//20

//객체멤버는 클래스명으로 접근할 수 없고 객체를 생성해 접근해야 한다
// console.log(MyClass.data1)//undefined
// MyClass.myFun1()//에러

//객체멤버는 객체명으로 접근
let obj=new MyClass()
console.log(obj.data1)//10
obj.myFun1()//myFun1 call,10,undefined 

//static 멤버는 객체명으로 접근

