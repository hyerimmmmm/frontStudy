// ② JSON 데이터용 인터페이스
interface WeatherData {
    "weather": [
        {
            "description": string; // 날씨 설명
            "icon": string; // 아이콘 번호
        }
    ],
    "main": {
        "temp": number; // 기온(℃)
    };
}