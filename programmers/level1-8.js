// 제일 작은 수 제거하기
// arr: 숫자 담긴 배열
// Math.min.apply: 최솟값 찾기

function solution(arr) {
    var answer = [];
    
    // 최솟값 색출
    var min = Math.min.apply(null, arr)
    // console.log("min", min)
    
    // 배열 순회하면서 최솟값 인덱스 삭제
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == min) {
            arr.splice(i, 1);
        }
    }
    // console.log(arr)
    
    if (arr.length == 0) {
        arr = [-1];
        answer = arr;
    } else {
        answer = arr;
    }
    
    return answer;
}