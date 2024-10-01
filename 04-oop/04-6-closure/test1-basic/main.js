//test1-execution context
let x=10
function oneFun(){
    let y=20
    console.log(x,y)
}
function twoFun(){
    let z=30
    console.log(x,z)
}
console.log(x)//10
oneFun()// 10 20
twoFun()// 10 30
console.log(x)//10
