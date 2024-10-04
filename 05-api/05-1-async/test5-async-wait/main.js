// //test1-async로 함수선언
// //비동기적으로 실행될 함수-호출한 곳이 대기하지 않도록 하는 함수
// async function  myFun1() {
//     setTimeout(()=>console.log('myFun1 call'),2000)
    
// }
// let  myFun2=async()=> {
//     setTimeout(()=>console.log('myFun2 call'),1000)
    
// }
// console.log('step1')
// myFun1()
// console.log('step2')
// myFun2()
// console.log('step3')

// // step1
// // step2
// // step3
// // myFun2 call
// // myFun1 call

//test2-promise vs async
function myFun3(){
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
}
myFun3().then((value)=>console.log(value))//1