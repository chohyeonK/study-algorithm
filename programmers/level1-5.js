// 숫자 문자열과 영단어
// 입력 s: (ex)one7five
// 출력 answer: 175(정수형)

function solution(s) {
    // console.log(s)
    
    var answer = 0;
    // 대응되는 영단어
    const charSet = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ]
    
    // 문자열과 대응되는 영단어로 찾은 후 숫자로 변환
    for (let i = 0; i < 10; i++) {
        s = s.split(charSet[i]).join(i)
    }
    
    // 문자열 -> 정수형 변환
    answer = Number(s)
    
    // console.log(answer)
    
    return answer;
}