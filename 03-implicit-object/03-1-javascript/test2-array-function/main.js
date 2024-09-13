"use strict"
let array1=[10,20]
let array2=[30,40]

//두 배열을 결합
let array3=array1.concat(array2)//배열 결합
console.log(array3)

//배열의 모든 데이터를 구분자로 결합해 하나의 문자열로 결합
let result1=array3.join(',')//데이터 사이에 구분자 추가
console.log(result1)


