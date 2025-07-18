abstract class Figure {
    abstract Draw(): void;
}

class Ellipse extends Figure {
    Draw(): void {
        console.log("타원을 그립니다.")
    }
}

const ep = new Ellipse();
ep.Draw(); // 출력 결과: "타원을 그립니다."