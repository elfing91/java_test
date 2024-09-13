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

//splice함수 (인덱스/삭제개수/추가데이터)
let array=[10,20,30,40]
array.splice(2,0,'hello')//2번 인덱스에서 0개를 지우고 'hello'데이터 추가
//10,20,'hello',30,40

array.splice(2, 0, 'one','two')//여러개의 데이터 추가가능
//10,20,'one','two','hello',30,40

//삭제개수와 추가데이터 수가 같으면 교체함수와 같다
array.splice(2,3,'a','b','c')//3개 삭제하고 3개 추가
//10,20,'a','b','c',30,40

//추가데이터를 기재하지 않으면 삭제함수와 같다
array.splice(2,3)//2번 인덱스에서 3개 삭제
//10,20,30,40






