const DAYS_IN_WEEK = 7;

export class MondayBasedWeek {
  static getDay(date) {
    const day = date.getDay();

    return ((day) ? day : DAYS_IN_WEEK) - 1;
  }

  static daysShift(date, shift) {
    return new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate() + shift
      )
    );
  }

  static firstDay(date) {
    const day = this.getDay(date);
    return this.daysShift(date, -day);
  }

  static lastDay(date) {
    const day = this.getDay(date);
    return this.daysShift(date, DAYS_IN_WEEK - day - 1);
  }

  static nextWeek(date) {
    const day = this.getDay(date);
    return this.daysShift(date, DAYS_IN_WEEK - day);
  }

  constructor(date = new Date()) {
    this.start = MondayBasedWeek.firstDay(date);
  }

  next() {
    return new MondayBasedWeek(MondayBasedWeek.nextWeek(this.start));
  }

  days() {
    const result = [];
    const last = MondayBasedWeek.lastDay(this.start);
    let date = this.start;

    while (last >= date) {
      result.push(date);
      date = MondayBasedWeek.daysShift(date, 1);
    }

    return result;
  }
}
