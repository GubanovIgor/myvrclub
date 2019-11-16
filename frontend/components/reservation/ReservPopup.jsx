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
    currentDate: moment(new Date()).format('DD.MM.YY'),
  }

  componentDidMount = () => {
    this.getTimeLapse(this.props.club);
  }

  getTimeLapse = (club) => {
    //Данные которые придут из клуба
    const start = '11:00'
    const end = '22:00'
    let interval = 45;
    const priceRange = [
      { category: 'low', start: '11:00', end: '14:00' },
      { category: 'middle', start: '14:00', end: '20:00' },
      { category: 'high', start: '20:00', end: '22:00' },
    ]

    const reservedSessions = {
      '15.11.19': ['10:00', '16:00', '19:00'],
      '14.11.19': ['12:00', '13:00', '14:00'],
      '16.11.19': ['11:00', '17:00', '20:00'],
    }

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
      // Добавляем статус
      timeBlock.status = false
      // Определяем ценовую категория сеанса (.subtract(interval*2, 'm') -  необходимо, чтобы первые два сеанса получили категорию)
      priceRange.forEach(el => {
        if (workStart.isAfter(moment(el.start, 'HH:mm').subtract(interval * 2, 'm')) && workStart.isBefore(workEnd))
          timeBlock.category = el.category;
        // Определяем занят ли сеанс
        if (reservedSessions.hasOwnProperty(this.state.currentDate)) {
          if (reservedSessions[this.state.currentDate].includes(timeBlock.time)) {
            timeBlock.category = 'not available';
          }
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

  handleChangeDate = async (date) => {
    const currentDate = moment(date).format('DD.MM.YY');
    console.log(moment(date).format('dddd'));
    await this.setState({ currentDate: currentDate });
    this.getTimeLapse();
  }

  handleChoseSession = (time) => {
    let timeLapse = this.state.timeLapse;
    timeLapse.forEach(el => {
      if (el.time === time) {
        el.status = !el.status
      }
    })
    this.setState({ timeLapse: timeLapse });
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

            <DateField handleChangeDate={this.handleChangeDate} currentDate={this.state.currentDate} />

            <PriceCategorys>
              {prices.map((el, i) => {
                return <PriceCategory price={el.price} key={i} color={el.color} />
              })}
            </PriceCategorys>
          </DateAndPriceInfo>
          {console.log(this.state.timeLapse)}
          <TimeTable>
            {this.state.timeLapse.map((el, i) => {
              return <TimeItem
                time={el.time}
                category={el.category}
                status={el.status}
                key={i}
                handleChoseSession={this.handleChoseSession} />
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