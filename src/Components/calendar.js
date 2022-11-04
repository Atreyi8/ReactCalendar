import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  startOfMonth,
  sub,
  setDate,
  differenceInHours
} from "date-fns";
import React from "react";
import Cell from "./cell";

const daysOfWeeks = ["Sun", "MON", "Tue", "Wed", "Thr", "Fri", "Sat"];

const Calendar = ({ selectedDate = new Date(), onChange }) => {
  const startDate = startOfMonth(selectedDate);
  const endDate = endOfMonth(selectedDate);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();
  const previousMonth = sub(selectedDate, { months: 1 });
  const nextMonth = add(selectedDate, { months: 1 });
  const previousYear = sub(selectedDate, { years: 1 });
  const nextYear = add(selectedDate, { years: 1 });

  const checkTodaysDate = (date, selectedDate) => {
    let selectedMonthDate = setDate(selectedDate, date);
    let todaysDate = new Date();
    let result = differenceInHours(selectedMonthDate, todaysDate);

    if (result >= 0 && result < 23) {
      return true;
    }
    return false;
  };

  const checkSelectedDate = (date) => {
    let cellDate = setDate(selectedDate, date);
    let result = differenceInHours(cellDate, selectedDate);
    if (result >= 0 && result < 23) {
      return true;
    }
    return false;
  };

  const handleClickDate = (index) => {
    const date = setDate(selectedDate, index);
    onChange(date);
  };

  return (
    <div className="boxContainer">
      <div className="headerGridContainer">
        <div className="monthHeaderColumn">
          {format(selectedDate, "LLLL yyyy")}
        </div>
        <div className="selectedDateHeaderColumn">
          Selected date : {format(selectedDate, "dd LLLL yyyy")}
        </div>
      </div>

      <div className="gridContainer">
        <Cell onClick={() => onChange(previousYear)}> {"<<"} </Cell>
        <Cell onClick={() => onChange(previousMonth)}> {"<"} </Cell>
        <Cell className="montGrid" isMonthHeader={true}>
          {format(selectedDate, "LLLL yyyy")}
        </Cell>
        <Cell onClick={() => onChange(nextMonth)}> {">"} </Cell>
        <Cell onClick={() => onChange(nextYear)}> {">>"} </Cell>
        {daysOfWeeks.map((day) => (
          <Cell key={day} className="days">
            {day}
          </Cell>
        ))}
        {Array.from({ length: prefixDays }).map((_, index) => {
          return <Cell key={index} className="dateCalss"></Cell>;
        })}
        {Array.from({ length: numDays }).map((_, index) => {
          return (
            <Cell
              key={index}
              className="dateCalss"
              isTodaysDate={checkTodaysDate(index + 1, selectedDate)}
              onClick={() => handleClickDate(index + 1)}
              isSelectedDate={checkSelectedDate(index + 1)}
            >
              {index + 1}
            </Cell>
          );
        })}
        {Array.from({ length: suffixDays }).map((_, index) => {
          return <Cell key={index} className="dateCalss"></Cell>;
        })}
      </div>
    </div>
  );
};

export default Calendar;
