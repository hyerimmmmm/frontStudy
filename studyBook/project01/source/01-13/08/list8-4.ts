class House {
    color : string = "";    // 집의 색상
    rooms : number = 0;     // 방의 개수
}

const redHouse = new House();   // House의 인스턴스화

redHouse.color = "빨간색";      // 빨간색 대입
redHouse.rooms = 3;             // 3을 대입

console.log(redHouse.color);    // 빨간색
console.log(redHouse.rooms);    // 3