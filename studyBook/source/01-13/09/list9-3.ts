class House {
    activateSecurity(isOn: boolean): void;
    activateSecurity(isOn: boolean, hasGarage: boolean): void;

    activateSecurity(isOn: boolean, hasGarage?: boolean): void {
        if (isOn) {
            console.log("보안을 활성화했습니다.");
            if (hasGarage) {
                console.log("차고 보안도 활성화합니다.");
            }
        } else {
            console.log("보안을 해제했습니다.");
            if (hasGarage) {
                console.log("차고 보안도 해제했습니다.");
            }
        }
    }
}

const myHouse = new House();
// 보안을 해제했습니다.
myHouse.activateSecurity(false);
// 보안을 활성화했습니다. // 차고 보안도 활성화합니다.
myHouse.activateSecurity(true, true);   