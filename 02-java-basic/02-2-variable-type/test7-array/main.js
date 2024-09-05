//여러개의 변수를 하나하나 선언
let user1='홍길동'
let user2='홍길동'
let user3='홍길동'

//모든 데이터가 여러개라고 배열에 담아 이용하는것은 좋지않다
//데이터가 상이한 성격이라면 정확한 변수명으로 식별되게 하는게 낫다

//만일 동일한 성격의 데이터라면 배열로 선언하는 것이 좋다

let user=['김','이','박']
user.push('최')//추가
user.pop('박')//제거