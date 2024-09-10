"use strict"

const month=prompt("월을 숫자로 입력하세요")


switch(month){
    case 3:
    case 4:
    case 5:{
        document.write(`입력하신 월은 ${month}이며, 봄입니다`)
        break;
    }
    case 6:
    case 7:
    case 8:{
        document.write(`입력하신 월은 ${month}이며, 여름입니다`)
        break;
    }
    case 9:
    case 10:
    case 11:{
        document.write(`입력하신 월은 ${month}이며, 가을입니다`)
        break;
    }
    case 12:
    case 1:
    case 2:{
        document.write(`입력하신 월은 ${month}이며, 겨울입니다`)
        break;
    }
    
}
