//child창의 html-js에서 접근할 데이터, 함수
let mainData=10

function mainFun(){
    console.log('mainFun 호출')
}

function goChild(){
    window.open('child.html','_blank','left=100,top=100,width=300,height=400')
}

function getChildData(){
    console.log(child.childData)
    child.childFun()
}