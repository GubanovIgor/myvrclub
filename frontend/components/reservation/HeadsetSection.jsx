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
        {props.section.glasses.map((status, i) => {
          return <HeadsetSection__Item
            status={status}
            key={i}
            index={i}
            handleSelectGlasses={props.handleSelectGlasses}
            model={props.section.model}/>
        })}
      </HeadsetSection__Items>
    </HeadsetSectionWrapper>
  );
}

export default HeadsetSection;