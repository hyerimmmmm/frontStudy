for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue; // 3의 배수인 경우에는 처리를 건너뛴다.
    }
    console.log(i);
}