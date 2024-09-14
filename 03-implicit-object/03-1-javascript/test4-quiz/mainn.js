'use strict'

let inputNode=document.getElementById("word")
let addNode=document.getElementById("addBtn")
let mapNode=document.getElementById("mapBtn")
let filterNode=document.getElementById("filterBtn")
let sortNode=document.getElementById("sortBtn")
let resultNode=document.getElementById("result")

let wordArray=[]
let resultArray=''

function printResult(array){
    array.forEach((index,value) => {
        resultArray+=`<li>${array}</li>`
    });
    resultNode.innerHTML(resultArray)

}
function input(){
    let word=inputNode.value//인풋노드의 값(id가 word인 엘레먼트의 인풋값)을 word변수에 할당
    wordArray.push(word)

    printResult(wordArray)
}

function map(){
    printResult(resultArray)

}
function filter(){
    printResult(resultArray)

}
function sort(){
    printResult(resultArray)

}
