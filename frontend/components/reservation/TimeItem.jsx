// Styled Components
import {
  TimeItemWrapper,
} from '../../stylesheets/reservation';

import { categoryColor } from './mok';

const TimeItem = (props) => {
  return (
    <TimeItemWrapper color={categoryColor[props.category]}>
      {props.time}
    </TimeItemWrapper>
  );
}

export default TimeItem;