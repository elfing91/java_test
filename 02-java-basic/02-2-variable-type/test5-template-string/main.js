const name='홍길동'
const calSum =(no) =>{
    let sum = no+10
    return sum
}

//문자열 데이터
//

let a = `hello<br/> 
world`

document.write(
    `안녕하세요 ${name}님, 함수 호출결과는 ${calSum(10)},${10+20}`
)
