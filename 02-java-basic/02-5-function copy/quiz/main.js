let name=prompt("이름을 입력하세요")
let job=prompt("직책을 입력하세요")
let money=prompt("연봉을 입력하세요")
let bonus

function calBonus(name, job, money){
    if(job=='A'){
        bonus=money*0.3
    }else if(job=='B'){
        bonus=money*0.2
    }else{
        bonus=money*0.1
    }

}

calBonus(name, job, money);//함수실행
document.write(`${name}의 추석보너스는 ${bonus}입니다`)