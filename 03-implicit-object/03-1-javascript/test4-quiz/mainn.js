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

    printResult(resultArray)
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
