import React, { Component } from 'react';

import {
  Wrapper,
  FadeScreen,
  Title,
  TitleInfo,
} from '../../stylesheets/reservation';

class ReservPopup extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Title>
            Нереальное место
          </Title>
          <TitleInfo>
            м. Курская
          </TitleInfo>
          <DateAndPriceInfo>
            
          </DateAndPriceInfo>
        </Wrapper>
        <FadeScreen />
      </div>
    );
  }
}

export default ReservPopup;