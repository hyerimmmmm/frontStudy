import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [inputText, setInpuytText] = useState("");

  useEffect(() => {
    if(inputText == '' || inputText.length == 8) {
      let targetDate = '20200101';
      if(inputText.length == 8) {
        targetDate = inputText;
      }
      axios({
        url: "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=27ac8f72eea1d11cea781512d9dfb384&targetDt=" + targetDate,
      }).then((res) => {
        // res.data.boxOfficeResult.dailyBoxOfficeList --> 영화 정보배열
        setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
      })
    }
  }, [inputText]);

  return (
    <div className="App">
      <table>
        <tr>
          <td>영화순위</td>
          <td>영화명</td>
          <td>개봉일</td>
        </tr>
        {movieList.map((item) => (
          <tr>
            <td>{item.rank}</td>
            <td>{item.movieNm}</td>
            <td>{item.openDt}</td>
          </tr>
        ))}
      </table>
      <input onChange={(e) => {setInpuytText(e.target.value)}}></input>
    </div>
  );
}

export default App;
