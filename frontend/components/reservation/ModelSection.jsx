

// Import Components
import ModelSection__Item from './ModelSection__Item';

// Styled Components
import {
  ModelSectionWrapper,
  ModelSectionWrapper__Image,
  ModelSectionWrapper__Counter
} from '../../stylesheets/reservation';

const ModelSection = (props) => {
  return (
    <ModelSectionWrapper>
      <ModelSectionWrapper__Image src={`/static/images/icons/${props.section}.jpg`}/>
      <ModelSectionWrapper__Counter>
        <div onClick={() => props.headsetsCountValueHandler(props.section, 'minus')}>-</div>
        <div>{props.headsetsCurretValue}</div>
        <div onClick={() => props.headsetsCountValueHandler(props.section, 'plus')}>+</div>
      </ModelSectionWrapper__Counter>
    </ModelSectionWrapper>
  );
}

export default ModelSection;