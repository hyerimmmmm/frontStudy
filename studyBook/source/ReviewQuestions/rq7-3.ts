const sumN = function(n: number): number {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

const result = sumN(10); // 1부터 10까지의 합을 계산한다.
console.log(result);     // 55가 결과다.