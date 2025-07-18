function getTriArea(base : number, height : number): number {
    let area : number = 0; // 넓이

    // 삼각형의 넓이 구하기
    area = base * height / 2;
    // 계산한 넓이를 호출자에게 반환한다.
    return area;
}

let areaSize = getTriArea(4, 3);
console.log(`넓이는 ${areaSize}입니다.`);