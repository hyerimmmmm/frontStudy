function getTriArea(base : number, height : number): void {
    let area : number = 0; // 넓이

    // 삼각형의 넓이를 계산한다.
    area = base * height / 2;
    // 계산한 넓이를 표시한다.
    console.log(`넓이는 ${area}입니다.`);
}

let baseSize : number = 4; // 밑변 4
let heightSize : number = 3; // 높이 3
getTriArea(baseSize, heightSize);