import React from "react";
import clsx from "clsx";
// clsx is utility for constructing className strings conditionally.
//Also serves as a faster & smaller drop-in replacement for the classnames module.

const Cell = ({ className, isMonthHeader, children }) => {
  return (
    <div
      className={clsx(
        "headerItemMargin",
        { calendarHeaderitems: !isMonthHeader },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
