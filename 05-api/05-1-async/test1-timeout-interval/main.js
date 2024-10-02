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

