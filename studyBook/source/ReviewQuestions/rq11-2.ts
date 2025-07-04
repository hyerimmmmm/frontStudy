try {
    throw new Error("알 수 없는 오류가 발생했습니다.")
} catch (err) {
    console.log("오류가 발생했습니다.:", err);
}