import { Day, Slot, TimeSlotStatus } from "../models/models";

export const checkReservationInAWeekLimit = (days: Day[], slot: Slot) => {
  const activeReservations = days.reduce((all, day) => {
    const activeReservationInADay = day.timeSlots.filter(
      (slot) => slot.status === TimeSlotStatus.RESERVED
    );
    return all + activeReservationInADay.length;
  }, 0);
  return activeReservations > 1;
};

export const checkReservationInADayLimit = (days: Day[], slot: Slot) => {
  const selectedDay = days.find(
    (day) => day.date.getTime() === slot.date.getTime()
  );
  if (selectedDay) {
    const activeReservationInADay = selectedDay.timeSlots.filter(
      (slot) => slot.status === TimeSlotStatus.RESERVED
    );
    return activeReservationInADay.length > 0;
  }
  return false;
};
