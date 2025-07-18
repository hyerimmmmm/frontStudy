try {
    const x = 10;
    const y = 0;
    if (y === 0) {
        throw new Error("0으로 나눌 수 없습니다.");
    }

    const ans = x / y;  // 예외가 발생하므로 여기서는 실행되지 않는다.
    console.log(ans);
} catch {
    console.log("오류가 발생했습니다.")
} finally {
    console.log("프로그램을 종료합니다.");
}