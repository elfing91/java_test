"use strict"

//[]기법으로 배열 선언
let product1=['book','book1']
let product2=[]

//왼쪽 객체가 오른쪽 타입인가?->product가 array타입인가?
console.log(product1 instanceof Array)//true
console.log(product2 instanceof Array)//true

//new Array()로 배열선언
let product3=new Array('book3','book4')
let product4=new Array()//빈 배열 객체
console.log(product3 instanceof Array)//true
console.log(product4 instanceof Array)//true

//배열length
console.log(product1.length)

//배열객체에 있는 데이터를 순차적으로 획득해 로직 돌리기
for(let i=0;i<product1.length;i++){
    console.log(`array[${i}]=${product1[i]}`)
}

//forEach함수->매개변수에 전달한 함수를 배열 개수만큼 호출
//호출하면서 순차적으로 배열에 담김 데이터-index를 개발자 함수 매개변수
product1.forEach((value,index)=>{
    console.log(`array[${index}]=${value}`)
})

product1[0]=10// 배열 데이터 수정
product1[1]=20

product1.push(30)//배열에 데이터 추가


