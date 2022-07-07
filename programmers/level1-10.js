// 문자열 다루기 기본
// s: 문자열
// 프로그래머스 테스트케이스 100% 통과 X

function solution(s) {
    var answer = true;
    var len = s.length;
    var result = Number(s) // 문자열  -> 정수형
    // 문자열 길이 체크
    if (!(len == 4 || len == 6)) {
        answer = false
    }
    
    // console.log("1", answer)
    
    // 정수형으로 바뀐 값이 Nan 값인 경우 = 문자 포함된 것
    if (isNaN(result) == true) {
        answer = false
    }
    // console.log("2", answer)
    
    return answer;
}