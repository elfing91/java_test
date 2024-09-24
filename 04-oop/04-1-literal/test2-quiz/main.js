let message = {
    msg: '디버깅용도로 많이 사용합니다',
    data: '2024.09.03 오전 10:23',
    member: {
        id: 'kmj',
        nickname: '킴민정',
        photo: 'img.png',
    },
    emojis: [{
        id: 'thumbsup',
        count: 3,
        member: ['kk', 'mm', 'ff'],
        add: function (id) {
            this.count++
            this.member.push(id)
        }
    }],
    addemoji: function (emojiId, memberId) {
        //모든 이모지의 id값이 새로운 이모지id와 같지않다면
        if (this.emojis.every(item => item.id !== emojiId)) {
            //신규이미지 추가
            this.emojis.push({
                id: emojiId,
                count: 1,
                member: [memberId],
                add: function (id) {
                    this.count++
                    this.member.push(id)
                }
            })

        }else{
            //기존에 추가되어 있던 이모지를 추가
            let index=this.emojis.findIndex((item)=>item.id===emojiId)
            this.emojis[index].add(memberId)
        }
    }
}
console.log(message)

//기본 이모지에 kim이 추가되었다고 가정
message.addemoji('thumbsup','kim')
console.log(message)

//ok라는 이모지를 lee가 추가함-새 이모지 추가
message.addemoji('ok','lee')
console.log(message)