class House {
    // 2개의 오버로드 메서드 생성
    activateSecurity(isOn: boolean): void;
    activateSecurity(isOn: boolean, hasGarage: boolean): void;

    activateSecurity(isOn: boolean, hasGarage?: boolean): void {
        if (isOn) {
            console.log("보안을 활성화했습니다.");
            if (hasGarage) {
                console.log("차고 보안도 활성화했습니다.");
            }
        }
        else {
            console.log("보안을 해제했습니다.");
            if (hasGarage) {
                console.log("차고 보안도 해제합니다.");
            }
        }
    }
}
    