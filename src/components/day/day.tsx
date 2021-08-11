import React from "react";
import { Day, Slot, TimeSlotStatus } from "../../models/models";
import TimeSlot from "../timeSlot/time-slot";
import "./day.css";

function getCssClassForStatus(status: TimeSlotStatus): string {
  switch (status) {
    case TimeSlotStatus.NOT_WORKING:
      return "not-working";
    case TimeSlotStatus.AVAILABLE:
      return "available";
    case TimeSlotStatus.UNAVAILABLE:
      return "unavailable";
    case TimeSlotStatus.LUNCH_BREAK:
      return "lunch-break";
    case TimeSlotStatus.RESERVED:
      return "reserved";

    default:
      return "unavailable";
  }
}

export default function DayComponent({
  day,
  onTimeSlotClick,
}: {
  day: Day;
  onTimeSlotClick: any;
}) {
  const fixedTimeSlotCssClass = "time-slot";
  const timeSlotStatusCssClass = (slot: Slot) =>
    getCssClassForStatus(slot.status);
  const timeSlotCssClasses = (slot: Slot) =>
    `${fixedTimeSlotCssClass} ${timeSlotStatusCssClass(slot)}`;

  const onClick = (slot: Slot) => {
    if (
      slot.status === TimeSlotStatus.AVAILABLE ||
      slot.status === TimeSlotStatus.RESERVED
    ) {
      onTimeSlotClick(slot);
    }
  };

  return (
    <ul>
      {" "}
      {day.timeSlots.map((slot) => (
        <li className={timeSlotCssClasses(slot)} onClick={() => onClick(slot)}>
          <TimeSlot slot={slot}></TimeSlot>
        </li>
      ))}
    </ul>
  );
}
