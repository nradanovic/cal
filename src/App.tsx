import React from "react";
import "./App.css";
import { TimeScale } from "./components/timeScale/timeScale";
import { Week } from "./components/week/week";
import { useCalendarReducer } from "./hooks/useCalendarReducer";
import { generateCalendar } from "./init/generateCalendar";

function App() {
  const calendar = generateCalendar(new Date());
  const { state, updateSlot } = useCalendarReducer();

  return (
    <div className="App">
      <span className="times">
        <TimeScale calendar={calendar}></TimeScale>
      </span>
      <div className="week">
        <Week days={state} onTimeSlotClick={updateSlot}></Week>
      </div>
    </div>
  );
}

export default App;
