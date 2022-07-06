// 두 정수 사이의 합
// a, b: 정수
// a, b의 대소관계가 정해져 있지 않음

function solution(a, b) {
    var answer = 0;
    var min = 0; // 최솟값
    var max = 0; // 최댓값
    
    if (a > b) { // a: 대, b: 소
        min = b;
        max = a;
    } else if (a < b) { // a: 소, b: 대
        min = a;
        max = b;
    } else { // a, b가 같은 값인 경우
        min = a;
        max = b;
    }
    
    // console.log("min", min)
    // console.log("max", max)
    
    // 최솟값부터 최댓값까지 더함
    for (var i = min; i <= max; i++) {
        answer += i;
    }
    
    // console.log(answer)
    
    return answer;
}