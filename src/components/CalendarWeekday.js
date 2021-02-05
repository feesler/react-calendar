import { PropTypes } from 'prop-types';

export function CalendarWeekday(props) {
  const { weekday } = props;

  return <th scope="col" title={weekday.long}>{weekday.short}</th>;
}

CalendarWeekday.propTypes = {
  weekday: PropTypes.shape({
    long: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
  })
};
