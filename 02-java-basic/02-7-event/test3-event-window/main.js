"use strict"
let resultNode

function printResult(msg){
    resultNode.innerHTML=msg
}
addEventListener('load',()=>{
    resultNode=document.getElementById('result')
    printResult('load event')
})

addEventListener('resize',()=>{
    addEventListener(`resize, width:${innerWidth},height:${innerHeight}`)

})

addEventListener('copy',(e)=>{
    //유저가 복사한 문자열에 원하는 문자열을 추가하기 위해
    let thisURL=document.URL
    
    //기본 이벤트 처리 방지
    e.preventDefault()

    //
    e.clipboardData.setData('test/plain')
})

