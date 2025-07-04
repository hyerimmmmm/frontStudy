// 클래스 정의의 기본형(프로퍼티, 생성자, 메서드 정의)
class Person {
    // 프로퍼티
    firstName: string;
    lastName: string;

    // 생성자(클래스 초기화 실행)
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName; // 생성자(constructor)
        this.lastName = lastName;
    }

    // 메서드(클래스 내에서 정의하는 함수)
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person("Steve", "Jobs");
console.log(person1.getFullName()); // Steve Jobs