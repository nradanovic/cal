import { useReducer } from "react";
import { generateCalendarData } from "../init/generateRandomData";
import {
  Day,
  initCalendarSettings,
  Slot,
  TimeSlotStatus,
} from "../models/models";
import {
  checkReservationInAWeekLimit,
  checkReservationInADayLimit,
} from "../services/validators";

type Action =
  | { type: "reserve_slot"; slot: Slot }
  | { type: "remove_reservation_from_slot"; slot: Slot };

function reducer(state: Day[], action: Action): Day[] {
  switch (action.type) {
    case "reserve_slot":
      return state.map((day) => {
        if (day.date.getTime() === action.slot.date.getTime()) {
          return {
            ...day,
            timeSlots: day.timeSlots.map((slot) => {
              if (slot.startTime === action.slot.startTime) {
                return {
                  ...slot,
                  status: TimeSlotStatus.RESERVED,
                };
              }
              return slot;
            }),
          };
        }
        return day;
      });
    case "remove_reservation_from_slot":
      return state.map((day) => {
        if (day.date.getTime() === action.slot.date.getTime()) {
          return {
            ...day,
            timeSlots: day.timeSlots.map((slot) => {
              if (slot.startTime === action.slot.startTime) {
                return {
                  ...slot,
                  status: TimeSlotStatus.AVAILABLE,
                };
              }
              return slot;
            }),
          };
        }
        return day;
      });
  }
}

export function useCalendarReducer() {
  const [state, dispatch] = useReducer(
    reducer,
    generateCalendarData(new Date(), initCalendarSettings.daysToDisplay)
  );
  const onTimeSlotClick = (slot: Slot) => {
    switch (slot.status) {
      case TimeSlotStatus.AVAILABLE:
        if (checkReservationInAWeekLimit(state, slot)) {
          alert("Week max limit reached");
        } else if (checkReservationInADayLimit(state, slot)) {
          alert("Day max limit reached");
        } else dispatch({ type: "reserve_slot", slot });

        break;

      case TimeSlotStatus.RESERVED:
        dispatch({ type: "remove_reservation_from_slot", slot });
        break;

      default:
        alert("Error");
    }
  };
  return { updateSlot: onTimeSlotClick, state, dispatch };
}
