// getFirstElement 함수 정의
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// number 타입의 배열
const numbers: number[] = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers);
console.log(firstNumber); // 1

// string 타입의 배열
const strings: string[] = ["사과", "귤", "바나나"];
const firstString = getFirstElement(strings);
console.log(firstString); // "사과"