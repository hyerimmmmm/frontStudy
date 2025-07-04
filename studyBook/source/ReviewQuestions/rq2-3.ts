// string형과 number형을 가진 튜플 타입 변수 userdata를 선언하고 이름과 나이로 초기화한다.
let userdata: [string, number] = ["John", 30]; // "John", 30으로 초기화하는 예

// 튜플에서 이름과 나이를 추출하여 출력한다.
const name: string = userdata[0];
const age: number = userdata[1];

console.log(`이름: ${name}`);
console.log(`나이: ${age}`);