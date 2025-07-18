const x: number = 5;
const y: number = 0;

if (y === 0) {
    // y가 0이면 예외를 던지고 프로그램을 종료한다.
    throw new Error("0으로 나눌 수 없습니다.");
}

const ans = x / y;