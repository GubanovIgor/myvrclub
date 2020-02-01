// Import Components
import ModelSection__Item from "./ModelSection__Item";

// Styled Components
import {
  ModelSectionWrapper,
  ModelSectionWrapper__Image,
  ModelSectionWrapper__Counter,
  ModelSectionWrapper__MinusBtn,
  ModelSectionWrapper__PlusBtn
} from "../../stylesheets/reservation";

const ModelSection = props => {
  return (
    <ModelSectionWrapper>
      <ModelSectionWrapper__Image
        src={`/static/images/icons/${props.section}.jpg`}
      />
      <ModelSectionWrapper__Counter>
        <ModelSectionWrapper__MinusBtn
          onClick={
            props.headsetsValue.current !== 0
              ? () => props.headsetsCountValueHandler(props.section, "minus")
              : null
          }
          count={props.headsetsValue.current}
        >
          -
        </ModelSectionWrapper__MinusBtn>
        <div>{props.headsetsValue.current}</div>
        <ModelSectionWrapper__PlusBtn
          onClick={
            props.headsetsValue.current < 10
              ? () => props.headsetsCountValueHandler(props.section, "plus")
              : null
          }
          count={props.headsetsValue.current}
        >
          +
        </ModelSectionWrapper__PlusBtn>
      </ModelSectionWrapper__Counter>
    </ModelSectionWrapper>
  );
};

export default ModelSection;
