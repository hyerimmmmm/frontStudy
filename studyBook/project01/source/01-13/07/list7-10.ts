// [구문 7-7]을 사용한 increment 함수
const increment = (n: number) : number => {
    return n + 1;
};
// [구문 7-8]을 사용한 decrement 함수
const decrement = (n: number) : number => n - 1;
console.log(increment(2));  // 3
console.log(decrement(2));  // 1