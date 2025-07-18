// function 키워드의 필요 없이, '=>'(화살표)를 사용하여 함수를 정의한다.
let divide = (x: number, y: number): number => {
    return x / y;
};

console.log(divide(20, 4)); // 5