import { PropTypes } from 'prop-types';
import { CalendarHeader } from './CalendarHeader.js';
import { CalendarWeekday } from './CalendarWeekday.js';
import { CalendarDay } from './CalendarDay.js';
import { DateUtils } from '../utils/DateUtils.js';

export function Calendar(props) {
  const { date } = props;

  const weekdays = DateUtils.getWeekdayNames();

  const monthWeeks = DateUtils.getWeeksOfMonth(date);
  const weeks = monthWeeks.map((week) => (
    week.days().map((day) => ({
      id: day.getTime(),
      isNow: DateUtils.isSameDate(date, day),
      other: !DateUtils.isSameYearMonth(date, day),
      title: day.getDate()
    }))
  ));

  return (
    <div className="ui-datepicker">
      <CalendarHeader date={date} />
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            {weekdays.map((day, ind) =>
              <CalendarWeekday key={`wd_${ind}`} weekday={day} />
            )}
          </tr>
        </thead>
        <tbody>
          {
            weeks.map((week, index) => (
              <tr key={`w_${index}`}>
                {week.map((day) =>
                  <CalendarDay key={day.id} day={day} />
                )}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};
