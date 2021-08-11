import React from "react";
import { Slot, TimeSlotStatus } from "../../models/models";
import "./time-slot.css";

function getTimeSlotLabel(status: TimeSlotStatus) {
  switch (status) {
    case TimeSlotStatus.AVAILABLE:
      return "Available";
    case TimeSlotStatus.LUNCH_BREAK:
      return "Lunch break";
    case TimeSlotStatus.NOT_WORKING:
      return "Not working";
    case TimeSlotStatus.RESERVED:
      return "Reserved";
    case TimeSlotStatus.UNAVAILABLE:
      return "Unavailable";

    default:
      break;
  }
}
export default function TimeSlot({ slot }: { slot: Slot }) {
  return <span className="time-slot">{getTimeSlotLabel(slot.status)}</span>;
}
