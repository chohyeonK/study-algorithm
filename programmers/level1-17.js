// 나머지가 1이 되는 수 찾기

function solution(n) {
    var answer = 0;
    var arr = [];
    
    // console.log(n)
    
    if (n <= 3) {
        n = 3;
    } else {
        for (var i = 1; i <= n; i++) {
            if (n % i == 1) {
                console.log(i)
                arr.push(i) // 배열에 값 담기
            }
        }
        arr.sort() // 배열 오름차순 정렬
        // console.log("arr", arr)
        n = arr[0]; // 최솟값 추출
    }
    
    answer = n 
    
    return answer;
}
