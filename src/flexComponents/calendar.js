import React from "react";
import Cell from "./cell";

const daysOfWeeks = ["Sun", "MON", "Tue", "Wed", "Thr", "Fri", "Sat"];
const Calendar = () => {
  return (
    <div className="boxContainer">
      <div className="calendarContainer">
        <Cell> {"<"} </Cell>
        <Cell> {"<<"} </Cell>
        <Cell className="monthClass" isMonthHeader={true}>
          August 2022
        </Cell>
        <Cell> {">"} </Cell>
        <Cell> {">>"} </Cell>
      </div>
      <div className="calendarContainer">
        {daysOfWeeks.map((day) => (
          <Cell className="days">{day}</Cell>
        ))}
      </div>

      <h2>hiii</h2>
      <div className="gridContainer">
        <div className="gridItem"> {"<"} </div>
        <div className="gridItem"> {"<<"} </div>
        <div className="montGrid gridItem" isMonthHeader={true}>
          August 2022
        </div>
        <div className="gridItem"> {">"} </div>
        <div className="gridItem"> {">>"} </div>
        {daysOfWeeks.map((day) => (
          <div className="days gridItem">{day}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
