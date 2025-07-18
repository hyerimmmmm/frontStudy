const x = false;
const y = false;
const z = false;

// !가 가장 먼저 평가된다
console.log(!x && y || z); // false

// 괄호가 가장 먼저 평가된다
console.log(!(x && y) || z); // true