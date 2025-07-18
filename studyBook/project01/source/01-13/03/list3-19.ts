const shoesBox2D: string[][] =
[
    ["A", "B", "C"],
    ["D", "E", "F"]
];

// 변경 전 값을 확인한다.
console.log(shoesBox2D[1]); // ["D", "E", "F"]

// 대입한다.
shoesBox2D[1][2] = "L";

// 변경된 값을 확인한다.
console.log(shoesBox2D[1]); // ["D", "E", "L"]