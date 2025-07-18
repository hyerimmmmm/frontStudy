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

console.log(shoesBox3D[0]); // [["A", "B", "C"], ["D", "E", "F"]]
console.log(shoesBox3D[1]); // [["G", "H", "I"], ["J", "K", "L"]]

console.log(shoesBox3D[0][0]); // ["A", "B", "C"]
console.log(shoesBox3D[0][1]); // ["D", "E", "F"]

console.log(shoesBox3D[1][0]); // ["G", "H", "I"]
console.log(shoesBox3D[1][1]); // ["J", "K", "L"]

console.log(shoesBox3D[0][0][0]); // "A"
console.log(shoesBox3D[0][0][1]); // "B"
console.log(shoesBox3D[0][0][2]); // "C"
console.log(shoesBox3D[0][1][0]); // "D"
console.log(shoesBox3D[0][1][1]); // "E"
console.log(shoesBox3D[0][1][2]); // "F"

console.log(shoesBox3D[1][0][0]); // "G"
console.log(shoesBox3D[1][0][1]); // "H"
console.log(shoesBox3D[1][0][2]); // "I"
console.log(shoesBox3D[1][1][0]); // "J"
console.log(shoesBox3D[1][1][1]); // "K"
console.log(shoesBox3D[1][1][2]); // "L"