const shoesBox3D: string[][][] =
[
    [
        ["A", "B", "C"],
        ["D", "E", "F"]
    ],
    [
        ["G", "H", "I"],
        ["J", "K", "L"]
    ]
];
// 변경 전 값을 확인한다.
console.log(shoesBox3D[1][0]); // ["G", "H", "I"]

// 대입한다.
shoesBox3D[1][0] = ["S","T","U"];

// 변경된 값을 확인한다.
console.log(shoesBox3D[1][0]); // ["S", "T", "U"]