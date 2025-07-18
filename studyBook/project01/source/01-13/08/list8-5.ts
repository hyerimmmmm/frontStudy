class House {
    private _rooms : number = 0;    // 방의 수

    // 세터 정의
    set rooms(count: number) {
        if (count < 0) {
            this._rooms = 0;
        } else {
            this._rooms = count;
        }
    }
}

const redHouse = new House();   // House 인스턴스화

redHouse.rooms = -3;            // 값 대입