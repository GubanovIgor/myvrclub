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
  ToPersonalData,
  PriceInfo,
  Sum,
  Commission,
  ToPersonalDataButton,
  CloseButton,
} from '../../stylesheets/reservation';

import {
  prices,
  headsets,
} from './mok'

class ReservPopup extends Component {
  state = {
    step: 'date and time',
    timeLapse: [],
  }

  componentDidMount = () => {
    this.getTimeLapse();
  }

  getTimeLapse = () => {
    let interval = 45;

    let time = '';
    let startWork = 10;
    let endWork = '22';
    let hour = 0;
    let timeLapse = [];

    for (let i = 0; hour !== endWork; i++) {
      hour = Math.floor(((interval * i) / 60) + startWork);
      if (hour >= 24) {
        hour = hour - 24;
      }
      let minutes = (interval * i) % 60;

      hour = String(hour);
      if (hour.length === 1) {
        hour = '0' + hour;
      }
      minutes = String(minutes)
      if (minutes.length === 1) {
        minutes = minutes + '0';
      }

      time = `${hour}.${minutes}`;

      console.log(time);
      timeLapse.push(time);
    }

    timeLapse.pop()

    this.setState({timeLapse: timeLapse})
  }

  render() {
    return (
      <div>
        <Wrapper>
          <CloseButton onClick={this.props.handleReservePopup}/>

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
              Выберите дату и время
            </Paragraph>
            <DateField />
            <PriceCategorys>
              {prices.map(el => {
                return <PriceCategory price={el.price} key={el.category} color={el.color}/>
              })}
            </PriceCategorys>
          </DateAndPriceInfo>

          <TimeTable>
              {this.state.timeLapse.map(el => {
                return <TimeItem time={el} key={el}/>
              })}
          </TimeTable>

          <HeadsetsInfo>
            <Paragraph>
              Выберите VR очки
            </Paragraph>
          </HeadsetsInfo>

          <HeadsetsTable>
            {headsets.map(el => {
              return <HeadsetSection item={el}/>
            })}
          </HeadsetsTable>

          <ToPersonalData>
            <PriceInfo>
              <Sum>
                3400 Р
              </Sum>
              <Commission>
                Без комиссии
              </Commission>
            </PriceInfo>
            <ToPersonalDataButton>
              Продолжить
            </ToPersonalDataButton>
          </ToPersonalData>

        </Wrapper>
        <FadeScreen onClick={this.props.handleReservePopup}/>
      </div>
    );
  }
}

export default ReservPopup;