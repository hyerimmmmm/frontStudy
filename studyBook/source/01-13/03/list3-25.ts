const myArray: number[][] = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

// 변경 전 값을 확인한다.
console.log(myArray[1]); // [4, 5]
console.log(myArray[2][3]); // 9

// 재대입한다.
myArray[1] = [10, 11];
myArray[2][3] = 12;

// 변경된 값을 확인한다.
console.log(myArray[1]); // [10, 11]
console.log(myArray[2][3]); // 12