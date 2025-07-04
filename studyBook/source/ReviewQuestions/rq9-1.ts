class House {
    public color: string = "白"; // 집의 색
    public rooms: number = 1;    // 방의 수

    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안을 활성화했습니다.");
        } else {
            console.log("보안을 해제했습니다.");
        }
    }
}

class FlyingHouse extends House {
    public Fly():void {
        console.log("하늘을 날아갑니다.");
    }
}

const fh = new FlyingHouse();
fh.Fly();