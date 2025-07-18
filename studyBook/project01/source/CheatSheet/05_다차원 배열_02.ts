// 데이터 타입을 지정한 3차원 배열을 선언한다.
// 타입 추론으로 선언할 경우 ': number[][][]'를 제거한다.
const cube: number[][][] = [
    [
        [1, 2, 3],
        [4, 5, 6],
    ],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
];
// 값 참조
console.log(cube[1]); // [ [ 7, 8, 9 ], [ 10, 11, 12 ] ]
console.log(cube[1][0]); // [ 7, 8, 9 ]
console.log(cube[0][1][2]); // 6