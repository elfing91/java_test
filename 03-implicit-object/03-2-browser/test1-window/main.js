"use strict"

//WINDOW의 기본 정보 추출
console.log(window.innerWidth, window.innerHeight)//875 877
console.log(window.outerWidth, window.outerHeight)//714 829
console.log(window.screenLeft, window.screenTop)

//스크롤 정보는 스크롤 이벤트가 발생한 경우만 유지
window.addEventListener('scroll', () => {
    console.log(window.scrollX, window.scrollY)
})

//새로운 탭으로 새 창이 뜬다
function myOpen1() {
    window.open('https://discord.com/channels/1249957310290333696/1249957311481380932')
}
//해당 창에서 페이지로 이동
function myOpen2() {
    window.open('https://discord.com/channels/1249957310290333696/1249957311481380932', '_self')
}

//자식창 지칭 객체.. 
let childWindow

const myOpen3 = () => {
  childWindow = window.open(
    'https://learn.inha.ac.kr/course/view.php?id=55640',
    '_blank',
    'left=100,top=100,width=300,height=400'
  )
  if(childWindow == null){
    alert('팝업이 차단되었습니다. 해제해 주세요..')
  }
}

const myClose = () => {
  console.dir(childWindow)
  childWindow.close()
}


