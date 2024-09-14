"use strict"

let inputNode = document.getElementById('word')
let addNode = document.getElementById('addBtn')
let mapNode = document.getElementById('mapBtn')
let filterNode = document.getElementById('filterBtn')
let sortNode = document.getElementById('sortBtn')

let resultNode = document.getElementById('result')
let wordArray = []//빈 배열 선언

function printResult(array) {//화면 출력함수
    let result = ''
    array.forEach((value, index) => {
        result += `<li>${value}</li>`

    });
    resultNode.innerHTML = result
}


function add() { //단어추가함수
    let word = inputNode.value//인풋데이터 값을 word에 저장
    wordArray.push(word)
    printResult(wordArray)
}

function map() {
    let resultArray = wordArray.map((value) => {
        return value.toUpperCase()
    })
    printResult(resultArray)

}

function filter() {
    let resultArray = wordArray.filter((value) => {
        return value.length > 5
    })
    printResult(resultArray)
}

function sort() {
    let resultArray = wordArray.sort((data1, data2) => {
        if (data1 > data2) return 1
        else if (data1 == data2) return 0
        else return -1
    })
    printResult(resultArray)

}




