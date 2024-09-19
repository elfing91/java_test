"use strict"
//math객체의 함수들

//round-반올림
console.log(Math.round(5.66))//6->5.66반올림

//random- 0~1사이의 난수
console.log(Math.random())

//random- 0~100사이의 난수
console.log(Math.random()*100)


//22-93사이의 난수
let max=93
let min=22
console.log(Math.random()*(max-min)+min)

//min/max- 최대,최소함수
console.log(Math.min(11,22,33,44))//11
console.log(Math.max(11,22,33,44))//44

//배열에서의 최대,최소값 추출
let array=[22,44,66,11]

console.log(Math.min(...array))//11
console.log(Math.max(...array))//66

