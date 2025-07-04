// ①import 문과 API 키
import { useState } from "react";
import axios from "axios";

const API_KEY = "1b952640897078e9439f4287e17ea680";

// ②JSON 데이터용 인터페이스
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

// ③OpenWeather 함수 정의
function OpenWeather() {
  // ④useState 선언
  const [city, setCity] = useState("Seoul");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // ⑤날씨 데이터 취득 부분
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("데이터 취득 오류:", error);
    }
  };

  // ⑥취득 데이터 표시 부분
  return (
    <>
      <input
        type="text"
        placeholder="지역명 입력"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>날씨 가져오기</button>

      {weatherData && (
        <div>
          <h2>{city}의 날씨</h2>
          <p><img src={"http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"}/></p>
          <p>날씨: {weatherData.weather[0].description}</p>
          <p>기온: {weatherData.main.temp}°C</p>
        </div>
      )}
    </>
  );
}

export default OpenWeather;