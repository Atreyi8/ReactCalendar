import React from "react";
import clsx from "clsx";
// clsx is utility for constructing className strings conditionally.
//Also serves as a faster & smaller drop-in replacement for the classnames module.

const Cell = ({
  className,
  onClick,
  isTodaysDate,
  isSelectedDate,
  children
}) => {
  return (
    <>
      <div
        className={clsx(
          "gridItem",
          { gridItemHover: !!onClick },
          { selectedDateChange: isSelectedDate },
          className
        )}
        onClick={onClick}
      >
        <div className={clsx({ todaysDateDiv: isTodaysDate })}>{children}</div>
      </div>
    </>
  );
};

export default Cell;
