//함수 선언 및 이용
console.log('step1')
function myFun1(){
    console.log('execute function body')
}
console.log('step2')

myFun1()

console.log('step3')


function myFun2(arg1,arg2){
    console.log(`arg:${arg1},arg2:${arg2}`)
    if(arg1<arg2){
        return arg1
    }else{
        return arg2
    }

}

let result=myFun2(10,20)
console.log(result)
myFun2()//undefined, undefined
myFun2(10)//10,undefined

function myFun3(arg1,arg2=0){
    console.log(`arg:${arg1},arg2:${arg2}`)

}
myFun3() //undefined,0
myFun3(10) //10,0
myFun3(10,20) //10,20











