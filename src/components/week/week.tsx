import React from "react";
import { Day } from "../../models/models";
import DayComponent from "../day/day";
import "./week.css";

export const Week: React.FC<{ days: Day[]; onTimeSlotClick: any }> = ({
  days,
  onTimeSlotClick,
}) => {
  return (
    <React.Fragment>
      {days.map((day) => (
        <div className="day">
          <span>{day.date.toLocaleDateString("hr")}</span>
          <DayComponent
            day={day}
            onTimeSlotClick={onTimeSlotClick}
          ></DayComponent>
        </div>
      ))}
    </React.Fragment>
  );
};
