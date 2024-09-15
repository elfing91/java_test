'use strict'

let inputNode = document.getElementById("word")
let addNode = document.getElementById("addBtn")
let mapNode = document.getElementById("mapBtn")
let filterNode = document.getElementById("filterBtn")
let sortNode = document.getElementById("sortBtn")
let resultNode = document.getElementById("result")

let wordArray = []


function printResult(array) {//✨array를 매개변수로 전달받음
    let resultArray = ''  //❔문제1) 함수내에서 선언해야하는 이유

    array.forEach(( value,index) => { //✨전달받은 결과 배열의 각 요소(인덱스, 값)  //❔문제2)value,index 순서
        //array.forEach((index.value)=>{}) //resultArray에 각 배열의 요소마다 입력받는 array값 추가하기
        resultArray += `<li>${value}</li>`//✨최종출력배열에 li형식으로 할당
    })
    resultNode.innerHTML=resultArray//❔문제3)resultNode.innerHTML(resultArray)이 안되는 이유
}

function add() {
    let word = inputNode.value//인풋노드의 값(id가 word인 엘레먼트의 인풋값)을 word변수에 할당->입력값을 하나씩 word배열에 추가하기 위해
    wordArray.push(word)

    printResult(wordArray)
}

function map() {
    let resultArray=wordArray.map((value)=>{
        return value.toUpperCase()
    })

    printResult(resultArray)
}
function filter() {
    let resultArray=wordArray.filter((value)=>{ //❔문제1) filter함수안의 value의 뜻은?
        return value.length>5  //❔문제2) 왜 if문을 안쓰고 바로 value의 길이연산후 리턴시킬까
    })
    printResult(resultArray)
}
function sort() {
    let resultArray=wordArray.sort((data1,data2)=>{
        if(data1>data2) return 1
        else if(data1==data2) return 0
        else return -1
  
    })
    printResult(resultArray)

}
