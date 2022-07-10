// 예산
// d: 부서별로 신청한 금액이 들어간 배열
// budget: 예산
// 예산보다 같거나 작은 경우에만 지원하도록 계산(차감)

function solution(d, budget) {
    var answer = 0;
    
    // 오름차순 정렬
    d.sort((a, b) => a - b);
    // console.log('d', d)
    
    // 배열만큼 반복해서 budget 계산
    for (var i = 0; i < d.length; i++) {
        if (budget >= d[i]) { // budget보다 같거나 작을 때만 계산
            budget -= d[i];
            answer++;
        }
    }
    // console.log('budget', budget)
    
    return answer;
}