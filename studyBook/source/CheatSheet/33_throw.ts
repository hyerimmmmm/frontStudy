function divide(a: number, b: number): number {
    if (b === 0) {
        // 예외 던지기
        throw new Error("0으로 나눌 수 없습니다.");
    }
    return a / b;
}   