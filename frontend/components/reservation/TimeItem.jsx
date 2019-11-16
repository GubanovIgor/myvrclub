// Styled Components
import {
  TimeItemWrapper,
} from '../../stylesheets/reservation';

import { categoryColor } from './mok';

const TimeItem = (props) => {
  const { category, handleChoseSession, time, status } = props
  return (
    <TimeItemWrapper
      color={categoryColor[category]}
      category={category}
      status={status}
      onClick={() => handleChoseSession(time)}>
      {time}
    </TimeItemWrapper>
  );
}

export default TimeItem;