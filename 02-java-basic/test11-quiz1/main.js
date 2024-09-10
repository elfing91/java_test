"use strict";

const primeTest = () => {
    let no = prompt("2 이상의 숫자를 입력하세요");
    

    if (no < 2) {
        document.querySelector("#result").innerHTML = "2 이상의 숫자를 입력하세요!";
        return;
    }

    let array = [];

    //어떤 수가 소수인지를 판단, 2부터 증가시셔서 나누어야 한다. ==> loop
    //2부터 입력받은 수까지 증가시키면서 소수인지를 판단한다. ==>loop

    let result

    for (let j = 2; j <= no; j++) {
        let isPrime = true;
        
        for (let i = 2; i < j; i++) {
            result = j % i
            if (result === 0) {
                 isPrime = false;
                break
            }
                 
        }
        if(isPrime){
            array.push(j);
        }

    }



    let message=`입력하신 ${no}까지의 소수는 ${array.join(', ')}입니다`

    document.querySelector("#result").innerHTML = message;
};
