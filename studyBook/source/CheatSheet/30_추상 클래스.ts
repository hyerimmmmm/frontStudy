// abstract 키워드를 사용하여 추상 클래스 Figure를 정의한다.
abstract class Figure {
    // 추상 메서드 Draw를 정의한다.
    abstract Draw(): void;
}
// 추상 클래스를 상속받아 클래스를 정의한다.
class Triangle extends Figure {
    Draw(): void {
        console.log("삼각형을 그립니다.");
    }
}

const tri = new Triangle();
tri.Draw(); // 삼각형을 그립니다.