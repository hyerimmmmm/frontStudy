// ⑥ 취득 데이터 표시 부분
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
            <p><img src={"http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png" }/></p>
            <p>날씨: {weatherData.weather[0].description}</p>
            <p>기온: {weatherData.main.temp}°C</p>
        </div>
    )}
    </>
);