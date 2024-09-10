"use strict"

let i=1;
while(i<=9){
    document.write(`<div><h3>${i}단</h3>`);
    let j=1
    while(j<=9){
        
        document.write(`${i}*${j}=${i*j}<br>`)
        j++
    }
    i++
    document.write(`</div>`);
}
