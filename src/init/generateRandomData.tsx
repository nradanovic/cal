import { Day, Slot, TimeSlotStatus } from "../models/models";
import { generateCalendarDays } from "./generateCalendar";

export function generateCalendarData(
  startDate: Date,
  numberOfDays: number
): Day[] {
  const days = generateCalendarDays(startDate, numberOfDays);
  const reservedSlots = generateRandomReservations(days);

  const weekFilledWithReservatiosn = addReservedSlotToWeek(days, reservedSlots);
  return weekFilledWithReservatiosn;
}

const generateRandomReservations = (days: Day[]): Slot[] => {
  const randomSlots: Slot[] = [];
  while (randomSlots.length < 16) {
    const daysWithAvailableSlot = days.filter((day) =>
      day.timeSlots.find((slot) => slot.status === TimeSlotStatus.AVAILABLE)
    );
    const randomDayIndex = Math.floor(
      Math.random() * daysWithAvailableSlot.length
    );
    const randomDay = daysWithAvailableSlot[randomDayIndex];
    const availableSlots = randomDay.timeSlots.filter(
      (slot) => slot.status === TimeSlotStatus.AVAILABLE
    );
    const randomSlotIndex = Math.floor(Math.random() * availableSlots.length);
    const randomSlot = availableSlots[randomSlotIndex];
    const checkIfAlreadyExist = randomSlots.find(
      (slot) =>
        slot.date.getTime() === randomSlot.date.getTime() &&
        slot.startTime === randomSlot.startTime
    );
    if (!checkIfAlreadyExist) {
      randomSlots.push(randomSlot);
    }
  }
  return randomSlots;
};

const addReservedSlotToWeek = (days: Day[], reservedSlots: Slot[]): Day[] => {
  return days.map((day) => {
    return {
      ...day,
      timeSlots: day.timeSlots.map((slot) => {
        const findIfSlotReserved = reservedSlots.find(
          (reservedSlot) =>
            reservedSlot.date.getTime() === slot.date.getTime() &&
            reservedSlot.startTime === slot.startTime
        );
        if (findIfSlotReserved) {
          return {
            ...slot,
            status: TimeSlotStatus.UNAVAILABLE,
          };
        }
        return slot;
      }),
    };
  });
};
