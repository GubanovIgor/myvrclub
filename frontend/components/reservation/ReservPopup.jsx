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
    //Данные которые придут из клуба
    const start = '10:00'
    const end = '04:00'
    let interval = 90;
    const priceRange = [
      { category: 'low', start: '10:00', end: '14:00' },
      { category: 'middle', start: '14:00', end: '20:00' },
      { category: 'high', start: '20:00', end: '23:00' },
    ]

    let timeLapse = [];

    let workStart = moment(start, 'HH:mm').subtract(interval, 'm'); // Отнимаем один интервал, чтобы не потерять первый сеанс
    let workStartCheck = moment(start, 'HH:mm');
    let workEnd = moment(end, 'HH:mm');

    // Если клуб заканчивает работать после 00:00, прибавляем к workEnd 1 день
    if (workEnd.isBefore(workStart)) {
      workEnd = moment(end, 'HH:mm').add(1, 'day');
    }

    // Собираем массив сеансов
    while (workStart.isBefore(workEnd)) {

      // Создаем сеанс, вычисляем его время
      let timeBlock = {};
      timeBlock.time = moment(workStart, 'HH:mm').add(interval, 'm').format('HH:mm');
      // Определяем ценовую категория сеанса (.subtract(interval*2, 'm') -  необходимо, чтобы первые два сеанса получили категорию)
      priceRange.forEach(el => {
        if (
          workStart.isAfter(moment(el.start, 'HH:mm').subtract(interval * 2, 'm')) && workStart.isBefore(moment(el.end, 'HH:mm')) ||
          workStart.isSame(moment(el.end, 'HH:mm'))
        ) {
          timeBlock.category = el.category;
        }
      })
      // Добавляем сеанс в массив сеансов
      timeLapse.push(timeBlock)

      // Переход к следующему сеансу
      workStart = moment(timeBlock.time, 'HH:mm')
      // Проверяем, если мы перешли за 00:00, то делаем переход на следующий день
      if (workStart.isBefore(workStartCheck)) {
        workStart = moment(timeBlock.time, 'HH:mm').add(1, 'day');
      }
    }

    // Убираем последний сеанс, т.к. он выходит за рамки рабочего дня
    timeLapse.pop()
    this.setState({ timeLapse: timeLapse })
  }

  render() {
    return (
      <div>
        <Wrapper>
          <CloseButton onClick={this.props.handleReservePopup} />

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
              {prices.map((el, i) => {
                return <PriceCategory price={el.price} key={i} color={el.color} />
              })}
            </PriceCategorys>
          </DateAndPriceInfo>
          {console.log(this.state.timeLapse)}
          <TimeTable>
            {this.state.timeLapse.map((el, i) => {
              return <TimeItem time={el.time} key={i} />
            })}
          </TimeTable>

          <HeadsetsInfo>
            <Paragraph>
              Выберите VR очки
            </Paragraph>
          </HeadsetsInfo>

          <HeadsetsTable>
            {headsets.map((el, i) => {
              return <HeadsetSection item={el} key={i} />
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
        <FadeScreen onClick={this.props.handleReservePopup} />
      </div>
    );
  }
}

export default ReservPopup;