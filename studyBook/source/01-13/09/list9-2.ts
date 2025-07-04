// [리스트 9-1]의 클래스 정의를 이곳에 기술한다.

class GarageHouse extends House {
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안을 활성화했습니다.");
            console.log("차고 보안도 활성화했습니다.");
        } else {
            console.log("보안을 해제했습니다.");
            console.log("차고 보안도 해제합니다.");
        }
    }
}

const gh = new GarageHouse();
gh.activateSecurity(true); // "보안을 활성화했습니다." "차고 보안도 활성화했습니다."
gh.activateSecurity(false); // "보안을 해제했습니다." "차고 보안도 해제합니다."