// 5명의 국어 점수를 배열에 저장한다.
const korean = [80, 65, 90, 75, 85]; 

let sum = 0;                    // 총점 저장용 변수
for (let i = 0; i < 5; i++) {   // 5회 루프
    sum += korean[i];           // 합계값에 더한다.
}

const average = sum / 5;        // 평균값을 계산한다.

console.log(`5명의 국어 총점은 ${sum}점, 평균 점수는 ${average}점입니다.`);