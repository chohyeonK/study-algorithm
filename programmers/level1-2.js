// 약수의 합 구하기
// n: 정수

function solution(n) {
    var answer = 0;
    
    // n의 약수 구하기(1~n까지)
    for (var i = 0; i <= n; i++) {
        if (n%i == 0) // 약수
            answer += i
    }
    return answer;
}