class House {
    public color: string = "흰색"; // 집의 색상
    public rooms: number = 1; // 방의 개수

    public activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안을 활성화했습니다.");
        } else {
            console.log("보안을 해제했습니다.");
        } 
    }
}

class GarageHouse extends House {
    // 차고 유무를 나타내는 프로퍼티 (true: 차고 있음 / false: 차고 없음)
    public hasGarage: boolean = false;
    // 차고를 열고 닫는 메서드 정의 (true: 차고 열기 / false: 차고 닫기)
    public openGarage(isOpen: boolean): void {
        if (this.hasGarage) { // 차고가 있나?
            if (isOpen) { // 차고를 여는 경우
                console.log("차고를 열었습니다.");
            } else { // 차고를 닫는 경우
                console.log("차고를 닫았습니다.");
            }
        } else { // 차고가 없는 경우
            console.log("차고가 없습니다.");
        }
    }
}

const gh = new GarageHouse(); // 인스턴스를 생성한다.
gh.hasGarage = true; // 차고를 '있음'으로 설정한다.
gh.openGarage(true); // 차고를 연다.
gh.openGarage(false); // 차고를 닫는다.
gh.activateSecurity(true); // 보안을 활성화한다.   