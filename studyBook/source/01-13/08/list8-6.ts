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
    
    // 게터 정의
    get rooms(): number {
        return this._rooms;
    }

    
}

const redHouse = new House();   // House의 인스턴스화

redHouse.rooms = -3;            // 값 대입
console.log(redHouse.rooms);    // 0이 표시된다.