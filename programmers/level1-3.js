// 모의고사
// - 입력값 필요: 수포자 1,2,3 답 담은 배열
// - 맞은 답 몇개 인지 카운트: 수포자 1,2,3용
// - 수포자 답과 답안 배열 비교
// - 카운트 시작
// - 비교 후 카운트 값 비교한 뒤 가장 많이 맞힌 사람 출력
function solution(answers) {
    console.log(answers)
    
    var supo1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    var supo2 = [2, 1, 2, 3, 2, 4, 2, 5, 2, 1];
    var supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    var res1 = 0;
    var res2 = 0;
    var res3 = 0;
    
    for(var i = 0; i < answers.length; i++) {
        if (supo1[i] == answers[i])
            res1++;
        if (supo2[i] == answers[i])
            res2++;
        if (supo3[i] == answers[i])
            res3++;
    }
    
    // console.log(res1, res2, res3)
    
    var answer = [];
    answer = cntCompare(res1, res2, res3)
    
    return answer;
}

// 수포자 1, 2, 3 맞춘 개수 비교
function cntCompare (res1, res2, res3) {
    var value = []
    
    // 수포자 1이 제일 큰 경우
    if (res1 > res2 && res1 > res3)
        return value = [1]
    // 수포자 2이 제일 큰 경우
    if (res2 > res1 && res2 > res3)
        return value = [2]
    // 수포자 3이 제일 큰 경우
    if (res3 > res1 && res3 > res2)
        return value = [3]
    // 수포자 1, 2가 제일 큰 경우
    if (res1 > res3 && res1 == res2)
        return value = [1, 2]
    // 수포자 1, 3가 제일 큰 경우
    if (res1 > res2 && res1 == res3)
        return value = [1, 3]
    // 수포자 2, 3가 제일 큰 경우
    if (res2 > res1 && res2 == res3)
        return value = [2, 3]
    // 수포자 1, 2, 3가 제일 큰 경우
    if (res1 == res2 && res1 == res3)
        return value = [1, 2, 3]
}