// Styled Components
import {
  TimeItemWrapper,
} from '../../stylesheets/reservation';

const TimeItem = (props) => {
  return (
    <TimeItemWrapper>
      {props.time}
    </TimeItemWrapper>
  );
}

export default TimeItem;