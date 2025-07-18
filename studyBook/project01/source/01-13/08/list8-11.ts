class House {
    public color: string; // 집의 색상(어디서든 접근 가능)
    private rooms: number; // 방의 수(같은 클래스 내에서만 접근 가능)
    protected address: string; // 주소(같은 클래스 및 상속 클래스 내에서만 접근 가능)

    constructor(color: string, rooms: number, address: string) {
        this.color = color;
        this.rooms = rooms;
        this.address = address;
    }

    public displayColor(): void {
        console.log(`이 집의 색은 ${this.color}입니다.`);
    }

    private countRooms(): number {
        return this.rooms;
    }

    protected getAddress(): string {
        return this.address;
    }
}


const redHouse = new House("하얀색", 1, "서울시"); // House의 인스턴스화

redHouse.color = "빨간색";
redHouse.displayColor();

// 아래는 접근 불가
//redHouse.rooms = 2;
//redHouse.countRooms();
//redHouse.address = "부산시";
//redHouse.getAddress();   