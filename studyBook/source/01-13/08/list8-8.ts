class House {
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("보안 시스템을 활성화했습니다.");
        } else {
            console.log("보안 시스템을 중지했습니다.");
        }
    }
}
const redHouse = new House();   // House 인스턴스화

// 보안 시스템을 활성화했습니다.
redHouse.activateSecurity(true);
// 보안 시스템을 중지했습니다.
redHouse.activateSecurity(false);