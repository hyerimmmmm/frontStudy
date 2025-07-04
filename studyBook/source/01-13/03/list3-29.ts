const myArray: number[] = [0, 1, 2, 3, 4];

// 변경 전의 myArray
console.log(myArray); // [0,1,2,3,4];

// pop 실행
const lastElement = myArray.pop();
console.log(`pop으로 꺼낸 값은 ${lastElement} `); // pop으로 꺼낸 값은 4
console.log(myArray); // [0,1,2,3];

const firstElement = myArray.shift();
console.log(`shift로 꺼낸 값은 ${firstElement} `); // shift로 꺼낸 값은 0
console.log(myArray); // [1,2,3]