// Styled Components
import {
  TimeItemWrapper,
} from '../../stylesheets/reservation';

import { categoryColor } from './mok';

const TimeItem = (props) => {
  const { category, handleSelectSession, time, status } = props
  return (
    <TimeItemWrapper
      color={categoryColor[category]}
      category={category}
      status={status}
      onClick={props.category !== 'not available' ? () => handleSelectSession(time) : null}>
      {time}
    </TimeItemWrapper>
  );
}

export default TimeItem;
