"use strict"

let resultNode = document.getElementById('result')
let formNode = document.getElementById('myForm')

function printResult(msg) {
    resultNode.innerHTML = msg
}

formNode.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameNode = document.getElementById('name')
    const phoneNode = document.getElementById('phone')
    const jobNode = document.getElementById('job')

    let msg=`name:${nameNode.value}<br>, phone:${phoneNode.a}<br>job:${jobNode.value } `


})