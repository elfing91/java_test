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

    //객체내에서 자신의 다른 멤버(변수나 함수)를 이용하려면 this예약어로 접근해야 한다
    //this: 객체내에서 자기자신을 지칭하는 예약어
    sayhello1:function(){
        console.log(`hello,${this.name}-${this.age}`)
    },

    //객체내에서 함수를 화살표 함수로 선언하는게 문제가 아니라
    //화살표 함수내에서 this가 객체자신을 지칭하지 못하는게 묹제
    sayhello2:()=>{
        console.log(`hello,${this.name}-${this.age}`)
    }
}

//선언된 객체 멤버 접근
//객체의 멤버접근은 .으로 함
console.log(user.name)//user객체중 name변수에 접근
console.log(user.order.count)//user객체내의 order객체중 count변수에 접근
user.sayhello()
user.sayhello1()//hello,홍길동-20
user.sayhello2()//hello,-undefined



