for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue; // 2인 경우, 다음 반복 처리로 건너뛰고 다음 반복 처리한다.
    }
    if (i === 4) {
        break; // 4인 경우, 반복 처리를 끝낸다.
    }
    console.log(i);
}  