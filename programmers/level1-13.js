// 없는 숫자 더하기

function solution(numbers) {
    var answer = -1;
    var result = 0;
    var result2 = 0;
    
    // 0~9까지 합을 구함 -- 1
    for (var i = 0; i <= 9; i++) {
        result += i;    
    }
    
    // numbers 배열의 합을 구함 --2
    for (var j = 0; j < numbers.length; j++) {
        result2 += numbers[j];
    }
    
    // 1-2 한 결과가 없는 숫자 다 더한 결과와 같음
    answer = result - result2;
    
    return answer;
}