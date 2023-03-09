import First from "./components/First"
import Intro from "./components/Intro"
import Timer from './components/Timer.jsx'
import Board from "./components/Board"


function App() {

  return (
    <div className="App">
      {/* <First name="전우성" number={5} /> */}
      {/* {5} 변수이거나 숫자를 넘기면 중괄호를 써줘야함 */}
      {/* <Intro name="전우성" age="30" email="wooseongjeon.94@gmail.com" comment="잘 부탁드립니다!" />
      <First/>
      <Timer />
      <Timer timezone="US/pacific" />
      <Timer timezone="Asia/yangon" /> */}
      {/* <Board category="뉴스" /> */}
      <Timer />
    </div>
  )
}

export default App
