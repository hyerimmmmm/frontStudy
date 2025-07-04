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
console.log(shoesBox3D[0]); // [["A", "B", "C"], ["D", "E", "F"]] /

// 대입한다.
shoesBox3D[0] = [["M","N","O"],["P","Q","R"]];

// 변경된 값을 확인한다.
console.log(shoesBox3D[0]); // [["M", "N", "O"], ["P", "Q", "R"]]