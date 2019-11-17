// Import Components
import ModelSection__Item from './ModelSection__Item';

// Styled Components
import {
  ModelSectionWrapper,
  ModelSection__Title,
  ModelSection__Items,
} from '../../stylesheets/reservation';

const ModelSection = (props) => {
  return (
    <ModelSectionWrapper>
      <ModelSection__Title>
        {props.section.model}
      </ModelSection__Title>
      <ModelSection__Items>
        {props.section.glasses.map((status, i) => {
          return <ModelSection__Item
            status={status}
            key={i}
            index={i}
            handleSelectGlasses={props.handleSelectGlasses}
            model={props.section.model}/>
        })}
      </ModelSection__Items>
    </ModelSectionWrapper>
  );
}

export default ModelSection;