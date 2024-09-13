"use strict"

let array=[11,3,20,15,5]
//배열중 10보다 큰 데이터만 반환
let result=array.filter((value)=>{
    return value>=10
})

console.log(result)//11,20,15

//배열의 데이터가 모두 조건에 만족하는가?
result=array.every((value)=>{
    return value>2 //모든 데이터의 값이 4보다 크다면 true
})
console.log(result) //2보다 모든값이 크니 true


//배열의 데이터에 모두 2를 곱한 결과값-최종결과는 배열
result=array.map((value)=>{
    return value*2
})
console.log(result)

//배열 정렬
//정렬을 하려면 두 데이터중 어느 데이터가 더 큰지 판단해야함
result=array.sort((data1,data2)=>{
    //반환값은 1,0,-1
    //1:data1이 더크다
    //0같다
    //-1:data1이 더 작다
    if(data1>data2){ return 1}
    else if(data1==data2){ return 0}
    else{ return -1}

})
console.log(result)//오름차순 정렬함

result=array.sort((data1,data2)=>{//내림차순 정렬
    //반환값은 1,0,-1
    //1:data1이 더크다
    //0같다
    //-1:data1이 더 작다
    if(data1<data2){ return 1}
    else if(data1==data2){ return 0}
    else{ return -1}

})
console.log(result)//내림차순 정렬함
