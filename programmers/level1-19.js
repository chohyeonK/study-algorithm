// 나누어 떨어지는 숫자 배열
// arr: 자연수 배열
// divisor: 자연수
// arr 배열의 원소를 divisor로 나누어 떨어지는 경우의 배열을 생성

function solution(arr, divisor) {
    var answer = [];
    
    // 배열만큼 나누어 떨어지는 수를 계산하는 것을 반복
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i])
        }
    }
    
    // 나누어 떨어지는 수가 없다면 -1을 리턴
    if (answer.length < 1) {
        answer.push(-1)
    }
    
    // 오름차순 정렬
    answer.sort((a, b) => a - b)

    return answer;
}