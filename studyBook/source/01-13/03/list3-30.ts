const myArray: number[] = [0, 1, 2, 3, 4, 5];

// 변경 전 배열을 표시한다.
console.log(myArray); // [0, 1, 2, 3, 4, 5];

// 인덱스 2의 위치에서 3개의 요소를 삭제한다.
const deletedElements = myArray.splice(2, 3);

// 삭제한 요소 출력한다.
console.log(deletedElements); // [2, 3, 4]
// 변경된 배열 표시
console.log(myArray); // [0, 1, 5]

// 인덱스 2의 위치에 '6'을 삽입한다.
myArray.splice(2, 0, 6);
// 변경된 배열을 표시한다.
console.log(myArray); // [0, 1, 6, 5];