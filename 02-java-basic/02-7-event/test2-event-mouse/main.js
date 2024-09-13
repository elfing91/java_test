"use strict"

window.addEventListener('load',()=>{
   let button=document.getElementById('button')
   button.addEventListener('click',()=>{
    console.log('mouse move')
   })
   button.addEventListener('mousedown',()=>{
    console.log('mouse down')
   })
   button.addEventListener('mouseup',()=>{
    console.log('mouse up')
   })

})
let area=document.getElementById('area')
let result=document.getElementById('result')

area.addEventListener('mousemove',(e)=>{
    result.innerHTML=`offset(${e.offsetX},${e.offsetY},page(${e.pageX},${e.pageY}))`
})

let inner=document.getElementById('inner')
inner.addEventListener('mouseenter',()=>{
    console.log('inner mouseenter')
})
inner.addEventListener('mouseover',()=>{
    console.log('inner mouseover')
})

let outer=document.getElementById('outer')
outer.addEventListener('mouseenter',()=>{
    console.log('outer mouseenter')
})
outer.addEventListener('mouseover',()=>{
    console.log('outer mouseover')
})


