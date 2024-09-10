"use strict"


for(let i=1;i<=9;i++){
    document.write(`<div><h3>${i}단</h3>`);
    for(let j=1;j<=9;j++){
        document.write(`${i}*${j}=${i*j}<br>`)
    }
    document.write(`</div>`);
}
//✨js코드에 바로 html마크업을 적용시킬 수 있다
