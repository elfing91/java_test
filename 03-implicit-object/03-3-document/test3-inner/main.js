"use strict"

//innerHTML vs innerText
//특정 노드의 바디를 지칭하는데 차이가 있음

let oneNode=document.getElementById('one')
console.log(oneNode.innerHTML)//hello
console.log(oneNode.innerText)//hello