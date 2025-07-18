// 데이터 타입을 지정한 2차원 배열을 선언한다.
// 타입 추론으로 선언할 경우 ': number[][]'를 제거한다.
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// 값 참조
console.log(table[1]); // [ 4, 5, 6 ]
console.log(table[1][2]); // 6