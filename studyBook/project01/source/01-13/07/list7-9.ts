// 함수를 인수로 받는 함수
function applyOperation(n: number, action: Function): void {
    console.log(action(n));
}

// 증가를 수행하는 함수식
const increment = function (n: number) {
    return n + 1;
};

// 감소를 수행하는 함수식
const decrement = function (n: number) {
    return n - 1;
};

// applyOperation 함수에 increment 함수를 전달하여 결과를 표시한다.
applyOperation(5, increment); // 결과: 6

// applyOperation 함수에 decrement 함수를 전달하고 결과를 표시한다.
applyOperation(5, decrement); // 결과: 4