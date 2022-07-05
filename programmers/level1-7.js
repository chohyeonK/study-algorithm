// 정수 내림차순으로 배치하기
// n: 정수
// sort: 배열 값 비교

function solution(n) {
    var answer = 0;
    // 정수형 -> 문자열로 변환
    var transChar = String(n);
    // 문자열 길이 구하기
    var len = transChar.length;
    // 문자열 담을 배열
    var arr = [];
    var transChar2 = '';
    
    // 문자열 길이 만큼 반복하여 한 문자씩 정수로 변환, 출력하여 배열에 저장
    for (var i = 0; i < len; i++) {
        // console.log(transChar[i]);
        arr.push(Number(transChar[i])); // 문자열 -> 정수형 변환
    }

    
    // 배열 안에 정수들 내림차순 배치
    arr.sort(function (a, b) {
        return b - a
    })
    
    // 배열 안에 값에 값 하나로 합친 후 
    // 숫자를 더하지 않고 나열하기 위해 문자열로 변환
    for (var j = 0; j < len; j++) {
        transChar2 += String(arr[j]);
    }
    
    // 결과값 문자열 -> 정수형으로 출력
    answer = Number(transChar2);
    
    return answer;
}