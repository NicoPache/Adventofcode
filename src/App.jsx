import { useState } from "react";
import "./App.css";
import { DayChallenge, Home } from "./screens";

function App() {
  const DAY_AMOUNT = 6;
  const [day, setDay] = useState(-1);

  return (
    <div className="App">
      <header className="App-header">
        <div className="w-1/5">
          <div onClick={() => setDay(-1)}> Advent of code </div>
          {new Array(DAY_AMOUNT).fill(null).map((_, index) => (
            <div key={"day " + index + 1} onClick={() => setDay(index)}>
              {index + 1}
            </div>
          ))}
        </div>
        <div>{day !== -1 ? <DayChallenge day={day} /> : <Home />}</div>
      </header>
    </div>
  );
}

export default App;
