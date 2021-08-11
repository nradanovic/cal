import {
  afternoonShift,
  Calendar,
  CalendarSettings,
  Day,
  initCalendarSettings,
  morningShift,
  Shift,
  Slot,
  TimeSlotStatus,
  VisibleSlot,
  saturdayShift,
} from "../models/models";

type Time = {
  hour: number;
  minute: number;
};

export function generateCalendar(initDate: Date): Calendar {
  const startDate = new Date(initDate);
  const calendarSettings = { ...initCalendarSettings };
  const days: Day[] = [];
  const visibleSlots: VisibleSlot[] = generateVisibleSlots();
  return {
    startDate,
    calendarSettings,
    days,
    visibleSlots,
  };
}

export function generateCalendarDays(initDate: Date, length: number) {
  return [...Array(length)].map((_, index) => {
    const date = new Date(initDate);
    date.setDate(initDate.getDate() + index);
    return generateDay(date);
  });
}

function generateDay(date: Date): Day {
  const shift = calculateShift(date);
  return {
    date: new Date(date),
    shiftSettings: shift,
    timeSlots: generateTimeSlotsInADay(date, shift),
  };
}

const calculateMinutesFromTime = (time: Time): number => {
  return time.hour * 60 + time.minute;
};

function generateTimeSlotsInADay(date: Date, shift: Shift | null): Slot[] {
  const numberOfSlots = calculateNumberOfTimeSlotsInADay(initCalendarSettings);
  return [...Array(numberOfSlots)].map((_, index) => ({
    date: new Date(date),
    duration: initCalendarSettings.timeSlotDuration,
    startTime: calculateMinutesFromTime({
      hour: initCalendarSettings.startHour,
      minute: index * initCalendarSettings.timeSlotDuration,
    }),
    status: calculateTimeSlotStatusFromShift(
      calculateMinutesFromTime({
        hour: initCalendarSettings.startHour,
        minute: index * initCalendarSettings.timeSlotDuration,
      }),
      shift
    ),
  }));
}

function calculateTimeSlotStatusFromShift(
  startTime: number,
  shift: Shift | null
): TimeSlotStatus {
  if (!shift) {
    return TimeSlotStatus.NOT_WORKING;
  }
  if (startTime < shift.startTime || startTime >= shift.endTime) {
    return TimeSlotStatus.NOT_WORKING;
  } else if (startTime === shift.breakStart) {
    return TimeSlotStatus.LUNCH_BREAK;
  }
  return TimeSlotStatus.AVAILABLE;
}

const isSaturday = (date: Date) => date.getDay() === 6;
const isSunday = (date: Date) => date.getDay() === 0;
const isOddDayOfMonth = (date: Date) => date.getDate() % 2 !== 0;
const isEvanDayOfMonth = (date: Date) => date.getDate() % 2 === 0;

function calculateShift(date: Date) {
  if (isSunday(date) || (isOddDayOfMonth(date) && isSaturday(date))) {
    return null;
  } else if (isEvanDayOfMonth(date) && isSaturday(date)) {
    return saturdayShift;
  } else if (isEvanDayOfMonth(date)) {
    return morningShift;
  } else if (isOddDayOfMonth(date)) {
    return afternoonShift;
  }
  return null;
}

function generateVisibleSlots(): VisibleSlot[] {
  const start = initCalendarSettings.startHour * 60;
  const slotDuration = initCalendarSettings.timeSlotDuration;
  const numberOfSlots = calculateNumberOfTimeSlotsInADay(initCalendarSettings);
  return [...Array(numberOfSlots)].map((_, index) => ({
    display: true,
    duration: slotDuration,
    startTime: start + index * slotDuration,
  }));
}

function calculateNumberOfTimeSlotsInADay(
  calendarSettings: CalendarSettings
): number {
  const start = calendarSettings.startHour * 60;
  const end = calendarSettings.endHour * 60;
  const slotDuration = calendarSettings.timeSlotDuration;
  return (end - start) / slotDuration;
}
