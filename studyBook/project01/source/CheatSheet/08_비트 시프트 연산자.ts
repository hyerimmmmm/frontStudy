const x: number = 5; // 00000101 (5의 2진수 표현)
let xVal: number = x << 2; // 00010100 (20)
console.log(xVal); // 20

const y: number = 20; // 00010100 (20의 2진수 표현)
let yVal: number = y >> 2; // 00000101 (5)
console.log(yVal); // 5