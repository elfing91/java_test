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
