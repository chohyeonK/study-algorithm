// 두 개 뽑아서 더하기
// numbers: 자연수 배열
// numbers 배열 안의 원소를 서로 더한 후 중복 제거 후 리턴

function solution(numbers) {
    var answer = [];
    
    // 배열 원소끼리 더한 값을 answer 배열에 저장
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    
    // 저장된 배열의 중복 제거를 위하여 set 사용
    const set = new Set(answer)
    answer = [...set]
    
    // 중복 제거된 배열을 오름차순으로 정렬
    answer.sort((a, b) => a - b)
    
    return answer;
}