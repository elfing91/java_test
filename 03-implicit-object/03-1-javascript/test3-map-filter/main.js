"use strict"

let array=[11,3,20,15,5]
//배열중 10보다 큰 데이터만 반환
let result=array.filter((value)=>{
    return value>=10
})

console.log(result)//11,20,15