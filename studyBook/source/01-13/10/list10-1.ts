abstract class Figure {
    abstract Draw(): void;
} 

class Triangle extends Figure {
    Draw(): void {
        console.log("삼각형을 그립니다.");
    }
}

const tri = new Triangle();
tri.Draw(); // "삼각형을 그립니다."를 출력한다.