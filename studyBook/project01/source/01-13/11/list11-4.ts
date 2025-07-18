try {
    throw new RangeError("범위 외 오류");
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("구문 에러가 발생했습니다.");
    } else if (err instanceof RangeError) {
        console.log("범위를 벗어난 조작이 발생했습니다.");
    } else {
        console.log("기타 예외가 발생했습니다.");
    }
} finally {
    console.log("프로그램을 종료합니다.");
}  