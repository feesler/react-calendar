import { PropTypes } from 'prop-types';
import { DateUtils } from '../utils/DateUtils.js';

export function CalendarHeader(props) {
  const { date } = props;
  const today = {
    dayNum: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    weekdayLong: DateUtils.getWeekdayLong(date),
    monthName: DateUtils.getMonthName(date),
    monthGenitive: DateUtils.getMonthGenitive(date)
  };

  return (
    <>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{today.weekdayLong}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{today.dayNum}</div>
          <div className="ui-datepicker-material-month">{today.monthGenitive}</div>
          <div className="ui-datepicker-material-year">{today.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{today.monthName}</span>&nbsp;<span className="ui-datepicker-year">{today.year}</span>
        </div>
      </div>
    </>
  );
}

CalendarHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};
