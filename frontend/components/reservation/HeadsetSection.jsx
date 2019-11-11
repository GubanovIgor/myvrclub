// Import Components
import HeadsetSection__Item from './HeadsetSection__Item';

// Styled Components
import {
  HeadsetSectionWrapper,
  HeadsetSection__Title,
  HeadsetSection__Items,
} from '../../stylesheets/reservation';

const HeadsetSection = (props) => {
  return (
    <HeadsetSectionWrapper>
      <HeadsetSection__Title>
        {props.item.headset}
      </HeadsetSection__Title>
      <HeadsetSection__Items>
        {props.item.amount.map(el => {
          return <HeadsetSection__Item/>
        })}
      </HeadsetSection__Items>
    </HeadsetSectionWrapper>
  );
}

export default HeadsetSection;