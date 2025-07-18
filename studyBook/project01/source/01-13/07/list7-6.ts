function sum(...nums: number[]): void {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(`합계는 ${total}입니다`);
}

sum(1, 2, 3, 4); // "합계는 10입니다"를 출력한다.
sum(5, 10); // "합계는 15입니다"를 출력한다.