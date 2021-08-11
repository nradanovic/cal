import React from "react";
import { Calendar } from "../../models/models";
import "./timeScale.css";

export const TimeScale: React.FC<{ calendar: Calendar }> = ({ calendar }) => {
  return (
    <React.Fragment>
      {calendar.visibleSlots.map((slot, index) => (
        <ul className="day" key={index}>
          <li>
            <span>{Math.floor(slot.startTime / 60)}</span>:
            <span>{(slot.startTime % 60).toString().padStart(2, "0")}</span>
          </li>
        </ul>
      ))}
    </React.Fragment>
  );
};
