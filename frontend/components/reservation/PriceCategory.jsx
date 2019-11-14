// Styled Components
import {
  PriceCategoryWrapper,
} from '../../stylesheets/reservation';

const PriceCategory = (props) => {
  return (
    <PriceCategoryWrapper color={props.color}>
      {props.price}
    </PriceCategoryWrapper>
  );
}

export default PriceCategory;