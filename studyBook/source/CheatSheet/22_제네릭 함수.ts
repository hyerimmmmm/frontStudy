// 제네릭 함수를 정의한다(T는 임의의 데이터 타입으로 치환된다).
// 다음은 배열의 첫 번째 요소를 반환하는 제네릭 함수를 정의하는 예다.
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// number 타입 배열
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(getFirstElement(numbers)); // 1

// string 타입 배열
const strings: string[] = ["사과", "귤", "바나나"];
console.log(getFirstElement(strings)); // "사과"