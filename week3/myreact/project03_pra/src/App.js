import logo from "./logo.svg";
import "./App.css";
import TeamList from "./component/TeamList";

function App() {
  return (
    <div className="App">
      <TeamList depart="교육운영부" name="선영표"></TeamList>
      <TeamList depart="전략기획팀" name="강예진"></TeamList>
      <TeamList depart="홍보팀" name="임보미"></TeamList>
      <TeamList depart="기획팀" name="최명화"></TeamList>
    </div>
  );
}

export default App;
