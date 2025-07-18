// 5명의 국어 점수를 배열에 저장한다.
const korean = [80, 65, 90, 75, 85];
let sum = 0;

for (const num of korean) {
    sum += num;
}

const average = sum / 5; // 평균값을 계산한다.
console.log(`5명의 국어 총점은 ${sum}점, 평균 점수는 ${average}점입니다.`);