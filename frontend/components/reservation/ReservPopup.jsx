import React, { Component } from 'react';
import { useState } from 'react';

// Import Components
import DateField from './DateField';
import PriceCategory from './PriceCategory';
import TimeItem from './TimeItem';
import HeadsetSection from './HeadsetSection';

// Styled Components
import {
  Wrapper,
  FadeScreen,
  Header,
  Title,
  TitleInfo,
  DateAndPriceInfo,
  Paragraph,
  PriceCategorys,
  TimeTable,
  HeadsetsInfo,
  HeadsetsTable,
} from '../../stylesheets/reservation';

import {
  time,
  prices,
  headsets,
} from './mok'

class ReservPopup extends Component {
  render() {
    return (
      <div>
        <Wrapper>

          <Header>
            <Title>
              Нереальное место
            </Title>
            <TitleInfo>
              м. Курская
            </TitleInfo>
          </Header>

          <DateAndPriceInfo>
            <Paragraph>
              1. Выберите дату и время
            </Paragraph>
            <DateField />
            <PriceCategorys>
              {prices.map(el => {
                return <PriceCategory price={el} key={el}/>
              })}
            </PriceCategorys>
          </DateAndPriceInfo>

          <TimeTable>
              {time.map(el => {
                return <TimeItem time={el} key={el}/>
              })}
          </TimeTable>

          <HeadsetsInfo>
            <Paragraph>
              2. Выберите VR очки
            </Paragraph>
          </HeadsetsInfo>

          <HeadsetsTable>
            {headsets.map(el => {
              return <HeadsetSection item={el}/>
            })}
          </HeadsetsTable>

        </Wrapper>
        <FadeScreen />
      </div>
    );
  }
}

export default ReservPopup;