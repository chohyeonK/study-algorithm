// 약수의 개수와 덧셈
// left~right까지 정수들의 약수의 개수를 구함
// 약수의 개수가 짝수일 때 더하고, 홀수일 때 빼기

function solution(left, right) {
    var answer = 0;
    
    // left ~ right 까지 약수 파악
    for (var i = left; i <= right; i++) {
        var num = 0 // 약수의 개수를 더한 값 저장
        for (var j = 1; j <= i; j++) {
            if (i % j == 0) {
                num++;
            }
        }
        
        // 약수의 개수가 짝/홀수인지 판단
        if (num % 2 == 0) { // 짝수는 더하기
            answer += i;
        } else { // 홀수는 더하기
            answer -= i;
        }
    }

    return answer;
}