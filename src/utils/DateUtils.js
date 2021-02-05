import { MondayBasedWeek } from './MondayBasedWeek';

export class DateUtils {
  static locales = ['ru-RU'];

  static firstUpperCase(str) {
    return str.substr(0, 1).toLocaleUpperCase(this.locales)
      .concat(str.substr(1).toLocaleLowerCase(this.locales));
  }

  static getFirstDayOfMonth(date) {
    return new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth()
      )
    );
  }

  /* Returns long weekday name for specified date */
  static getWeekdayLong(date) {
    const weekdayName = date.toLocaleString(this.locales, { weekday: 'long' });
    return this.firstUpperCase(weekdayName);
  }

  /* Returns short weekday name for specified date */
  static getWeekdayShort(date) {
    const weekdayName = date.toLocaleString(this.locales, { weekday: 'short' });
    return this.firstUpperCase(weekdayName);
  }

  /* Returns month name for specified date */
  static getMonthName(date) {
    const monthName = date.toLocaleString(this.locales, { month: 'long' });
    return this.firstUpperCase(monthName);
  }

  /* Returns genitive month name for specified date */
  static getMonthGenitive(date) {
    const formatter = new Intl.DateTimeFormat(this.locales, { month: 'long', day: 'numeric' });
    const dateParts = formatter.formatToParts(date);
    const monthPart = dateParts.find((part) => part.type === 'month');

    return monthPart.value;
  }

  /* Check two dates has the same year and month */
  static isSameYearMonth(dateA, dateB) {
    return (
      dateA.getFullYear() === dateB.getFullYear()
      && dateA.getMonth() === dateB.getMonth()
    );
  }

  /* Check two dates has the same year, month and day */
  static isSameDate(dateA, dateB) {
    return (
      dateA.getFullYear() === dateB.getFullYear()
      && dateA.getMonth() === dateB.getMonth()
      && dateA.getDate() === dateB.getDate()
    );
  }

  /* Returns array of MondayBasedWeek for month of the specified date */
  static getWeeksOfMonth(date) {
    const weeks = [];
    const firstDay = this.getFirstDayOfMonth(date);
    let week = new MondayBasedWeek(firstDay);

    do {
      weeks.push(week);
      week = week.next();
    } while (this.isSameYearMonth(date, week.start));

    return weeks;
  }

  /* Returns array of long and short names of weekdays */
  static getWeekdayNames() {
    const anyWeek = new MondayBasedWeek();
    const weekdays = anyWeek.days().map(
      (day) => ({
        day: MondayBasedWeek.getDay(day),
        long: this.getWeekdayLong(day),
        short: this.getWeekdayShort(day)
      })
    );

    return weekdays;
  }
}
