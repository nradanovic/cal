export interface Shift {
  startTime: number;
  endTime: number;
  breakStart: number;
  breakEnd: number;
}

export const morningShift: Shift = {
  startTime: 8 * 60,
  endTime: 14 * 60,
  breakStart: 11 * 60,
  breakEnd: 11 * 60 + 30,
};

export const afternoonShift: Shift = {
  startTime: 13 * 60,
  endTime: 19 * 60,
  breakStart: 16 * 60,
  breakEnd: 16 * 60 + 30,
};

export const saturdayShift: Shift = {
  startTime: 8 * 60,
  endTime: 14 * 60,
  breakStart: 11 * 60,
  breakEnd: 11 * 60 + 30,
};
export interface CalendarSettings {
  daysToDisplay: number;
  startHour: number;
  endHour: number;
  timeSlotDuration: number;
}

export const initCalendarSettings: CalendarSettings = {
  daysToDisplay: 7,
  startHour: 7,
  endHour: 20,
  timeSlotDuration: 30,
};

export enum TimeSlotStatus {
  NOT_WORKING,
  AVAILABLE,
  LUNCH_BREAK,
  UNAVAILABLE,
  RESERVED,
}

export interface Calendar {
  startDate: Date;
  calendarSettings: CalendarSettings;
  days: Day[];
  visibleSlots: VisibleSlot[];
}

export interface Day {
  date: Date;
  shiftSettings: Shift | null;
  timeSlots: Slot[];
}

export interface Slot {
  date: Date;
  startTime: number;
  duration: number;
  status: TimeSlotStatus;
}

export interface VisibleSlot {
  startTime: number;
  duration: number;
  display: boolean;
}
