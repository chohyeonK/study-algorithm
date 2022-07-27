// 같은 숫자는 싫어
// arr: 자연수 배열(연속되는 수도 있음)

function solution(arr)
{
    var answer = [];
    
    // 배열 안의 원소를 다음 원소와 비교하여 연속되면 1개만 들어가도록
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i+1]) {
            answer.push(arr[i])
        }
    }
    
    return answer;
}