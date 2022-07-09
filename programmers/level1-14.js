// 부족한 금액 계산하기
// price: 원래 이용료
// money: 현재 자신이 가지고 있는 금액
// count: 놀이기구 이용 횟수
// 이용료 N배 = 놀이기구 이용 횟수 * 원래 이용료

function solution(price, money, count) {
    var answer = -1;
    var num = 0;
    
    // 횟수만큼 반복하며 이용료 N배
    for (var i = 1; i <= count; i++) {
        num += i * price;
    }

    // 자신이 가지고 있는 금액이 크거나 같으면 0 리턴
    if (money >= num) {
        answer = 0;
    } else { // 모자란 금액 리턴
        answer = num - money;
    }

    return answer;
}