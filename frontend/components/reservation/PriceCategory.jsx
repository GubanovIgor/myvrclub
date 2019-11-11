// Styled Components
import {
  PriceCategoryWrapper,
} from '../../stylesheets/reservation';

const PriceCategory = (props) => {
  return (
    <PriceCategoryWrapper>
      {props.price}
    </PriceCategoryWrapper>
  );
}

export default PriceCategory;