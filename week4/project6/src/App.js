import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  async function getMovies() {
    // 비동기 통신으로 영화데이터 가져오기
    // axios
    // axios({
    //   // 1. 어디랑 통신할 건지
    //   url: "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt=20120101",
    //   // 2. 어던 방시긍로 통신 할건지
    //   method: "GET",
    //   // 3. .then () -> 통신 성고시 실행할 콜백함수
    //   // result: 서버에서 응답 보낸값
    // }).then((result) => {
    //   console.log(result);
    // });

    // axios 축약구조 --> 안전장치 걸림
    // async ~await
    // data: 서버에서 응답 보낸 값
    const data = await axios.get(
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt=20120101"
    );

    console.log(data);
  }
  return (
    <div className="App">
      <h1>영화순위 데이터 가져오기</h1>
      <button onClick={getMovies}>GET</button>
    </div>
  );
}

export default App;
