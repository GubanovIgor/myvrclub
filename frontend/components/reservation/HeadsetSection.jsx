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
        {props.section.model}
      </HeadsetSection__Title>
      <HeadsetSection__Items>
        {props.section.glasses.map((glasses, i) => {
          return <HeadsetSection__Item key={i}/>
        })}
      </HeadsetSection__Items>
    </HeadsetSectionWrapper>
  );
}

export default HeadsetSection;