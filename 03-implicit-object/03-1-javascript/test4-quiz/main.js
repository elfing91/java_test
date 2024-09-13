"use strict"

let addNode = document.getElementById('addBtn')
let mapNode = document.getElementById('mapBtn')
let filterNode = document.getElementById('filterBtn')
let sortNode = document.getElementById('sortBtn')

let resultNode = document.getElementById('result')


let array = []
function add() {
    array.push(addNode.value)

     for (let i=0; i<array.length;i++){
        resultNode.innerHTML = array[i]

     }

}

function map() {
    result = array.map((value) => {
        return value * 2
    })
    console.log(result)


    let resultNode = document.getElementById('result')
    resultNode.innerHTML = `${id}, ${pw} 로 로그인을 시도합니다.`
}

function filter() {
    let result = array.filter((value) => {
        return value >= 5
    })



    let resultNode = document.getElementById('result')
    resultNode.innerHTML = `${id}, ${pw} 로 로그인을 시도합니다.`
}

function sort() {

    result = array.sort((data1, data2) => {
        //반환값은 1,0,-1
        //1:data1이 더크다
        //0같다
        //-1:data1이 더 작다
        if (data1 > data2) { return 1 }
        else if (data1 == data2) { return 0 }
        else { return -1 }

    })
    console.log(result)//오름차순 정렬함


    let resultNode = document.getElementById('result')
    resultNode.innerHTML = `${id}, ${pw} 로 로그인을 시도합니다.`
}




