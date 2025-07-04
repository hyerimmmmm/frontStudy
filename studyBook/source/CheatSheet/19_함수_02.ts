// 기본 인수가 있는 함수
function sayHello(name: string = "No Name"): string {
    return `Hello, ${name}! `;
}

console.log(sayHello()); // Hello, No Name!
console.log(sayHello("Steve")); // Hello, Steve!