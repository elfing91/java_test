"use strict"

let area1=document.getElementById('area1')
let area2=document.getElementById('area2')
let area3=document.getElementById('area3')

//evenet핸들러 등록, 버블링 단계제서 실행할  핸들러 
area1.addEventListener('click',function(){
    console.log('bubling area1 event handler')
})

area2.addEventListener('click',function(){
    console.log('bubling area2 event handler')
})

area3.addEventListener('click',function(){
    console.log('bubling area3 event handler')
})

//evenet핸들러 capturing
area1.addEventListener('click',function(){
    console.log('capturing area1 event handler')
},true)

area2.addEventListener('click',function(){
    console.log('capturing area2 event handler')
},true)

area3.addEventListener('click',function(){
    console.log('capturing area3 event handler')
},true)