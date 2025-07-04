function sampleFunction3(): void {
    const x = 1;

    if (x == 1) {
        const y = 2;

        console.log(y); // 2
        console.log(`if 문 내:${globalVariable}`);
    }

    for (let i = 0; i < 1; i++) {
        const z = 3;

        console.log(z); // 3
        console.log(`for문 내:${globalVariable}`);
    }
    console.log(`함수 내:${globalVariable}`);
}

const globalVariable: number = 10;
console.log(`글로벌 스코프:${globalVariable}`);

sampleFunction3();