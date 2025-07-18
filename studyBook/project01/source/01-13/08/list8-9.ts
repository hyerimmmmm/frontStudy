class House {
    color: string; // 집의 색상
    private _rooms: number; // 방의 개수

    constructor() {
        this.color = "하얀색"; // 집의 색상
        this._rooms = 1;
    }

    // 게터 선언
    get rooms(): number {
        return this._rooms;
    }

    // 세터 선언
    set rooms(count: number) {
        if (count < 0) {
            this._rooms = 0;
        } else {
            this._rooms = count;
        }
    }
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안 시스템을 활성화했습니다.");
        } else {
            console.log("보안 시스템을 중지했습니다.");
        }
    }
}   