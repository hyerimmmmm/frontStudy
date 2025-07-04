// [리스트 9-4]의 정의를 이곳에 기술한다.

class GarageHouse extends House {
    private hasGarage: boolean;		// 차고 유무 관리

    constructor(rooms: number, hasGarage: boolean) {
        super(rooms);
        this.hasGarage = hasGarage;
    }

    public getHasGarage(): boolean {
        return this.hasGarage;
    }

    public getHouseDetails(): void {
        console.log(`방 수는 ${this.getRooms()}입니다.`);
        if (this.hasGarage) {
            console.log("차고가 있습니다.");
        }
    }
}