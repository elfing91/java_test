"use strict"
let array1=[10,20]
let array2=[30,40]

//두 배열을 결합
let array3=array1.concat(array2)//배열 결합
console.log(array3)

//배열의 모든 데이터를 구분자로 결합해 하나의 문자열로 결합
let result1=array3.join(',')//데이터 사이에 구분자 추가
console.log(result1)

//배열에 데이터 추가 맨뒤/맨앞
array3.push(100) //맨뒤에 추가
array3.unshift(200) //맨앞에 추가

//한번에 여러개 추가가능
array3.push(1000,2000)
array3.unshift(3000,4000)

//배열에 데이터 삭제 
array3.pop()////맨 뒤 삭제
array3.shift()//맨앞 삭제





