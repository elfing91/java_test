"use strict";

const primeTest = () => {
    let no = prompt('2 이상의 숫자를 입력하세요')
    var message = ''
    let result


    for (let i = 2; i < no; i++) {
        result = no % i
        if (result === 0) {
            break
        }
    }

    if (result == 0 || no <= 1) {
        message = `${no}는 소수가 아닙니다`

    } else {
        message = `${no}는 소수입니다`
    }





    //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
    document.querySelector('#result').innerHTML = message
}
