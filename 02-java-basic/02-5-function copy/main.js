"use strict"

//선언문 스타일의 함수 선언

function myFun1(){
    console.log("call")
}

//표현식 스타일의 함수선언
const myFun2=function(){
    console.log("call")

}

myFun1()
myFun2()

//arrow 함수

const myFun3=()=>{
    console.log("call")
}

myFun3()

//화살표함수, 결과리턴
const myFun4 =(arg1)=>{
    console.log("call")
    return20
}

let result4=myFun4(10)
console.log(result4)
