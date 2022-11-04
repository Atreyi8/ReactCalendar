import "./styles.css";
import Calendar from "./Components/calendar";
import { useState } from "react";
export default function App() {
  const [currentdate, setCurrentDate] = useState(new Date());
  return (
    <div className="App">
      <h1>React Calendar</h1>
      <Calendar selectedDate={currentdate} onChange={setCurrentDate} />
    </div>
  );
}
