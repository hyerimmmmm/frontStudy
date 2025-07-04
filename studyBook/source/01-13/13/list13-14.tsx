// ⑤ 날씨 데이터 취득 부분
const fetchWeatherData = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`);
        setWeatherData(response.data);
    }
    catch (error) {
        console.error('데이터 취득 오류:', error);
    }
};