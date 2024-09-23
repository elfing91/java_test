let area1=document.getElementById('area1')
let area2=document.getElementById('area2')
let area3=document.getElementById('area3')

//아래 코드는 node.style, 즉 dom node에서 획득한것
//node트리에 유지되는 css정보는 inline 스타일 뿐이다

console.log(area1.style.width)//200px
console.log(area2.style.width)//
console.log(area3.style.width)//

//css속성명은 camelCase를 이용하여야 하므로 -가 아니라 대문자를 이용
//background-color->backgroundColor
console.log(area1.style.height)
console.log(area1.style.backgroundColor)

//노드의 css속성값 변경
area1.addEventListener('click',function(){//클릭 이벤트시 노란원으로 만드는 함수
    area1.style.backgroundColor='yellow'
    area1.style.borderRadius='50%'
})

//inline스타일이 아니라 외부에 선언되어 적용된 css값 획득
console.log(getComputedStyle(area1).width)//200px
console.log(getComputedStyle(area2).width)//200px
console.log(getComputedStyle(area3).width)//200px


