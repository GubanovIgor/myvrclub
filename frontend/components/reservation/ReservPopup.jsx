import React, { Component } from 'react';
const moment = require('moment');

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
    this.getTimeLapse(this.props.club);
  }

  getTimeLapse = (club) => {
    let timeLapse = [];
    let interval = 30;

    let workStart = moment('10:00', 'HH:mm');
    let workStartCheck = moment('10:00', 'HH:mm');
    let workEnd = moment('22:00', 'HH:mm');

    if (workEnd.isBefore(workStart)) {
      workEnd = moment('22:00', 'HH:mm').add(1, 'day');
    }

    timeLapse.push(workStart.format('HH:mm'));

    while (workStart.isBefore(workEnd)) {
      let currentTime = moment(workStart, 'HH:mm').add(interval, 'm').format('HH:mm');
      workStart = moment(currentTime, 'HH:mm')

      if (workStart.isBefore(workStartCheck)) {
        workStart = moment(currentTime, 'HH:mm').add(1, 'day');
      }

      timeLapse.push(currentTime);
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