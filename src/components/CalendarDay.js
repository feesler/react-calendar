import { PropTypes } from 'prop-types';

export function CalendarDay(props) {
  const { day } = props;
  const id = `${(day.other?'od':'d')}_${day.title}`;

  if (day.isNow) {
    return <td key={id} className="ui-datepicker-today">{day.title}</td>;
  }

  if (day.other) {
    return <td key={id} className="ui-datepicker-other-month">{day.title}</td>;
  }

  return <td key={id}>{day.title}</td>;
}

CalendarDay.propTypes = {
  day: PropTypes.shape({
    title: PropTypes.number.isRequired,
    isNow: PropTypes.bool,
    other: PropTypes.bool,
  })
};

CalendarDay.defaultProps = {
  day: PropTypes.shape({
    isNow: false,
    other: false,
  })
};
