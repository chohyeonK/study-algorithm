// 서울에서 김서방 찾기
// seoul: 문자열이 들어있는 배열
// seoul 배열에 "Kim" 문자열이 있는지 찾기 -> indexOf 함수 이용하여 배열 위치 반환

function solution(seoul) {
    var answer = '';
    
    answer = '김서방은 ' + seoul.indexOf('Kim') + '에 있다'
    
    return answer;
}