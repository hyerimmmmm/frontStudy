// 기본 클래스
class ParentClass {
    parentProperty: string = "";

    constructor() {

    }

    parentMethod(): void {
        console.log("이것은 기본 클래스의 메서드입니다.");
    }
}

// 파생 클래스
class ChildClass extends ParentClass {
    // 기본 클래스에서 정의한 메서드를 재정의합니다.
    parentMethod(): void {
        console.log("이것은 오버라이드된 메서드입니다.");
    }
}