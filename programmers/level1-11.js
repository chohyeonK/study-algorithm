// 음양 더하기
// absoultes: 정수형 배열
// signs: 부호 배열

function solution(absolutes, signs) {
    var answer = 0;
    
    // 배열만큼 반복하여 더함
    for (var i = 0; i < absolutes.length; i++) {
        var num = 0; // 부호 + 정수 담길 변수
        if (signs[i] == true) { // true: 양수
            num = "+" + absolutes[i];
            answer += Number(num); // 정수형 변환
        } else { // false: 음수
            num = "-" + absolutes[i];
            answer += Number(num); // 정수형 변환
        }
        // console.log(num)
        // console.log(answer)
    }
    return answer;
}