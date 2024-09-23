//객체선언-object literal기법으로
let user={
    name:'홍길동',
    age:20,
    isMember:true,

    //객체내의 객체
    order:{
        productId:2,
        count:10
    },

    //함수멤버->메소드
    sayhello:function(){// 객체내에 sayhello 함수선언
        console.log(`hello,${this.name}`)
    },

    sayhello1:function(){
        console.log(`hello,${this.name}-${this.age}`)
    }
}

//선언된 객체 멤버 접근
//객체의 멤버접근은 .으로 함
console.log(user.name)//user객체중 name변수에 접근
console.log(user.order.count)//user객체내의 order객체중 count변수에 접근
user.sayhello()
user.sayhello1()



