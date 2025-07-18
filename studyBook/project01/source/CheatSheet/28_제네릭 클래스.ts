// T는 임의의 데이터 타입
class GenericClass<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

let gc1 = new GenericClass<number>(31);
let gc2 = new GenericClass<string>("TypeScript");

console.log(gc1.value); // 31
console.log(gc2.value); // "TypeScript"