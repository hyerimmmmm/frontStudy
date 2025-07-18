// switch 문
const animal: string = "bird";

// 동물의 종류에 따른 한글 이름을 출력한다.
switch (animal) {
    case "dog":
        console.log("개");
        break;
    case "cat":
        console.log("고양이");
        break;
    case "bird":
        console.log("새");
        break;
    default:
        console.log("해당 없음");
}