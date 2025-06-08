import React from "react";
import { useState, useEffect } from "react";

const MyDiceGame = () => {
  const [comDice, setComDice] = useState(1);
  const [userDice, setUserDice] = useState(1);

  const [comScore, setComScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  const [result, setResult] = useState("");

  function chDice() {
    // 컴퓨터 주사위와 사용자 주사위를 랜덤한 다른 주사위로 바꿔주세요
    setComDice(parseInt(Math.random() * 6 + 1));
    setUserDice(parseInt(Math.random() * 6 + 1));

    // --> comDice, userDice
  }

  useEffect(() => {
    if (comDice > userDice) {
      setComScore(comScore + 1);
    } else if (comDice < userDice) {
      setUserScore(userScore + 1);
    }
  }, [comDice, userDice]);

  useEffect(() => {
    if (userScore >= 10) {
      setResult("사용자가 이겼습니다");
    } else if (comScore >= 10) {
      setResult("컴퓨터가 이겼습니다");
    }
  }, [userScore, comScore]);

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={chDice}>start</button>
      <div className="dice">
        <img src={`./img/dice${comDice}.png`} alt="" />
        <h1>Com Score: {comScore}</h1>
      </div>

      <div className="dice">
        <img src={`./img/dice${userDice}.png`} alt="" />
        <h1>User Score: {userScore}</h1>
      </div>

      <h1>결과: {result}</h1>
    </div>
  );
};

export default MyDiceGame;
