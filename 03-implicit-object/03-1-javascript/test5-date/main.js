"use strict"

//현재 시간/날짜
//new-샛체생성 연산자(모든 객체는 new로 선언해 만든다)

let date1=new Date()
console.log(date1.toString())//Thu Sep 19 2024 10:14:43 GMT+0900 (한국 표준시)
console.log(date1.toLocaleString())//2024. 9. 19. 오전 10:14:43

//특정시간을 지정해 객체생성
let date2=new Date('2024-09-19 10:14:43')
console.log(date2.toLocaleString())//2024. 9. 19. 오전 10:14:43

let date3=new Date(2024,9-1,19,10,10,10)//월데이터는 0부터시작, 0이 1월
console.log(date3.toLocaleString())//2024. 10. 19. 오전 10:10:10
//0에서 웰데이터가 시작하므로 9월이 아니라 10월이 출력->9-1로 월데이터 입력

//날짜의 특정 데이터만 추출
console.log('year',date1.getFullYear())
console.log('month',date1.getMonth())
console.log('date',date1.getDate())
console.log('day',date1.getDay())
console.log('seconds',date1.getSeconds())
console.log('timestamp',date1.getTime())
//year 2024
// month 8
// date 19
// day 4
// seconds 10
// timestamp 1726708870198