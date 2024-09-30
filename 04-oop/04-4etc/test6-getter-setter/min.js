let obj={
    setNum:(value)=>{
        console.log(`어디선가 값 면경을 시도합니다`)
    }
}
obj.setNum(20)
console.log(obj.num)

let obj2={
    get num:0
    setNum:(value)=>{
        console.log(`어디선가 값 면경을 시도합니다`)
    }
}
obj.setNum(20)
console.log(obj.num)