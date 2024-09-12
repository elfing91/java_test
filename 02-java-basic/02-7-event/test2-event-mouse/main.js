"use strict"

window.addEventListener('load',()=>{
    console.log('html 문서로딩 완료')
})

window.onload=()=>{
    console.log('html문서 로딩 완료2')
}

const myEventHandler=()=>{
    console.log('myEventHandler button click')
}

let button1Node=document.getElementById('button1')
button1Node.addEventListener('click',()=>{
    console.log('button 1 click')
})

let button2Node=document.getElementById('button2')
button2Node.onclick=()=>{
    console.log('button 2 click')
}





