let resultNode = document.getElementById('result')
let formNode = document.getElementById('myForm')


function member() {

}

function printResult() {
    resultNode.innerHTML = msg
}

formNode.addEventListener('submit', (e) => {
    //form submit 이벤트 기본적용되지 않도록 함
    e.preventDefault()

    let nameNode = document.getElementById('name')
    let hobbyNode = document.querySelectorAll('input[id="hobby"]:checked')
    let genderNode = document.querySelectorAll('input[id="gender"]:checked')

    let hobbtResult=''
    hobbyNode.forEach((item)=>{
        hobbtResult+=`${item.value}`
    })
    let genderResult=''
    if(genderNode){
        genderResult=genderNode.value
    }

    let msg=`name:${nameNode.value} <br>취미:${hobbyNode.value}<br>성별${genderNode.value}`
 
})
