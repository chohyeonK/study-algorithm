// 평균 구하기
// arr: 정수 담고 있는 배열

function solution(arr) {
    var num = 0; // 배열 원소 다 더한 값 저장할 변수
    var answer = 0;
    
    for(var i = 0; i < arr.length; i++) {
        // 배열 원소 더함
        num = num + arr[i];
    }
    
    // 평균 구하기
    answer = num / arr.length;
    
    return answer;
}