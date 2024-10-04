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

// //test2-promise vs async
// function myFun3(){
//     return new Promise((resolve,reject)=>{
//         resolve(1)
//     })
// }
// myFun3().then((value)=>console.log(value))//1

// async function myFun4() {
//     return 2//data 발생-내부적으로 promise의 resolve 활용
// }
// myFun4().then((value)=>console.log(value)) //2

// //test3-promise 데이터 반복적으로 실행 획득
// function getData(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(`${id} data`),1000)
//     })
// }
// function myFun5(){
//     getData(1)
//         .then((value)=>{
//             console.log(value)
//             return getData(2)
//         })
//         .then((value)=>{
//             console.log(value)
//             return getData(3)
//         })
//         .then((value)=>{
//             console.log(value)
            
//         })
// }
// myFun5()


// //then()으로 Promise를 이용하는 함수를 await로도 작성 가능
// async function myFun6() {
//     console.log(await getData(1))
//     console.log(await getData(1))
//     console.log(await getData(1))
// }
// myFun6()

//test4-비동기적으로 실행시켜야 하는 여러개의 함수 동시진행
//모든 결과 데이터를 획득만 하면 된다
function funA(){
    return new PromiseI((resolve)=>{
        setTimeout(()=>{resolve(`funB data`)},1000)
    })
}

async function myFun7() {
    console.time()
    let aData=await funA()
    console.log(aData)
    let bData=await funB()
    console.log(bData)
    console.timeEnd()
}

//함수호출에 await가 아니라 결과 data에 await/ 함수는 동시진향
async function  myFun8() {
    console.time()
    let aData= funA()
    let bData= funB()
    console.log(await aData)
    console.log(await bData)
    console.timeEnd()

}

async function myFun9() {
    console.time()
    //비동기 함수를 여러개 호출, 동시진행하는 경우
    //all()을 이용할 수도
    //배열에 건 함수를 동시 실행시키며 모든 데이터가 획득된령우 콜백호출
    Promise.all([funA(),funB()]).then((value)=>{
        console.log(value)
        console.timeEnd()

    })
    
}
myFun9()

