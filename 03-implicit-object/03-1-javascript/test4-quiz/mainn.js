'use strict'

let inputNode = document.getElementById("word")
let addNode = document.getElementById("addBtn")
let mapNode = document.getElementById("mapBtn")
let filterNode = document.getElementById("filterBtn")
let sortNode = document.getElementById("sortBtn")
let resultNode = document.getElementById("result")

let wordArray = []
let resultArray = ''


function printResult(array) {//✨array를 매개변수로 전달받음
    array.forEach((index, value) => { //✨전달받은 결과 배열의 각 요소(인덱스, 값)
        //array.forEach((index.value)=>{}) //resultArray에 각 배열의 요소마다 입력받는 array값 추가하기
        resultArray = `<li>${array}</li>`//✨최종출력배열에 li형식으로 할당
    })
    resultNode.innerHTML(resultArray)
}

function add() {
    let word = inputNode.value//인풋노드의 값(id가 word인 엘레먼트의 인풋값)을 word변수에 할당
    wordArray.push(word)

    printResult(wordArray)
}

function map() {
    let resultArray = wordArray.map((value) => {
        return value.toUppercase()
    })
    printResult(resultArray)

}
function filter() {
    let resultArray=wordArray.filter((value)=>{
        return value.length()>5
    })
    printResult(resultArray)

}
function sort() {
    let resultArray=wordArray.sort((value)=>{
        
    })
    printResult(resultArray)

}
