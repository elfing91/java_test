"use strict"

//innerHTML vs innerText
//특정 노드의 바디를 지칭하는데 차이가 있음

//특정 노드의 바디 획득하기
let oneNode=document.getElementById('one')
console.log(oneNode.innerHTML)//hello
console.log(oneNode.innerText)//hello

let twoNode=document.getElementById('two')
//<a href="#">google</a>
console.log(twoNode.innerHTML)//<a href="#">google</a>
console.log(twoNode.innerText)//google
//innerHTML은 태그를 포함한 body전체 출력

//특정 노드의 바디에 문자열을 추가해 출력
let result1=document.getElementById('result1')
let result2=document.getElementById('result2')
//동적 문자열이지만 innerHTML로 지정한 문자열을 html 파서가 파싱함
//태그가 포함되어 있다면 태그 효과를 적용
result1.innerHTML='<a href="#">google</a>##'//google##
result2.innerText='<a href="#">google</a>**'//<a href="#">google</a>**
//동적 문자열 내에 태그가 있다고 해도 태그로 인지하지 않고 문자열로 인지해 화면에 출력됨

//속성 핸들링
let link1=document.getElementById('link1')

//속성값 획득
console.log(link1.href)
//http://127.0.0.1:5501/03-implicit-object/03-3-document/test3-inner/index.html
console.log(link1.getAttribute('href'))
//http://127.0.0.1:5501/03-implicit-object/03-3-document/test3-inner/index.html

//속성변경
let link2=document.getElementById('link2')
link2.setAttribute('href','https://www.musinsa.com/products/1029352')

//속성제거
let link3=document.getElementById('link3')
link3.removeAttribute()

