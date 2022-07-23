// 자릿수 더하기

function solution(n)
{
    var answer = 0;

    var str = String(n); // 문자열로 변환

    for (var i = 0; i < str.length; i++) { // 문자열 개수만큼 한개씩 자르기
        var result1 = str.slice(i, i + 1); // 한개씩 자르기
        answer += Number(result1); // 자른 문자열을 정수형으로 변환하여 더하기
    }

    return answer;
}