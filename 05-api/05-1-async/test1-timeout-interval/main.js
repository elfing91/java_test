function sayHello(){
    //시간 측정을 위해
    console.timeEnd() //default: n ms
    console.log('Hello')//Hello
}

console.time()//timeEnd에서 걸린시간 출력

//즉시실행
//setTimeout(sayHello) ////default: 0.541015625 ms

//1초뒤에 실행
setTimeout(sayHello,1000) //default: 1004.243896484375 ms


//데이터 전달-함수는 직접 실행시키는 게 아니라 의뢰하는 것이므로
//의뢰내용에 데이터를 전달해야 한다
function sayHello2(arg1,arg2,arg3){
    console.log(`Hello${arg1},${arg2},${arg3}`)
}
setTimeout(sayHello2,1000,'김씨',10,true) //Hello김씨,10,true
//매개변수 전달하기


