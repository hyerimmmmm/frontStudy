class House {
    private rooms: number;	　// 방의 수

    constructor(rooms: number) {
        this.rooms = rooms;
    }

    // 방의 수를 구하는 메서드
    protected getRooms(): number {
        return this.rooms;
    }
}