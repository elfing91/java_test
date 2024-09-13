"use strict"

//valid상황을 여러함수에서 공유해야 한다면 global로 한다
let isIdValid=false
let isPwValid=false
let id=''
let pw=''


function idValidCheck(){
    let idNode=document.getElementById('id')
    id=idNode.value
    alert(id)//id 인풋에 입력받은 idNode값 출력 
}

function pwValidCheck(){
    alert('pw valid')
}

function login(){
    alert('login')
}