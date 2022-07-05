// 짝수와 홀수
// num: 정수

function solution(num) {
    var answer = '';
    
    if (num % 2 == 0) { // 짝수
        answer = "Even"
    } else { // 홀수
        answer = "Odd"
    }
    
    return answer;
}