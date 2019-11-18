import React, { Component } from 'react';
const moment = require('moment');

// Import Components
import DateField from './DateField';
import PriceCategory from './PriceCategory';
import TimeItem from './TimeItem';
import ModelSection from './ModelSection';
import PersonalDataPopup from './PersonalDataPopup';

// Styled Components
import {
  ReservPopupWrapper,
  Content,
  FadeScreen,
  Header,
  Title,
  TitleInfo,
  DateAndPriceInfo,
  Paragraph,
  PriceCategorys,
  TimeTable,
  HeadsetsSectionWrapper,
  HeadsetsInfo,
  HeadsetsTable,
  ToPersonalData,
  PriceInfo,
  Sum,
  Commission,
  ToPersonalDataButton,
  CloseButton,
  AddInfo,
  ValidationHint,
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
    selectedTime: [],
    headsetsPack: [],
    sum: 0,
    PersonalDataPopupStatus: false,
    timeValidation: false,
    headsetsValidation: false,
  }

  componentDidMount = () => {
    this.getTimeLapse(this.props.club);
  }

  getTimeLapse = (club) => {
    //Данные которые придут из клуба
    const start = '11:00';
    const end = '22:00';
    let interval = 60;
    const priceRange = [
      { category: 'low', start: '11:00', end: '14:00', price: 400 },
      { category: 'middle', start: '14:00', end: '20:00', price: 700 },
      { category: 'high', start: '20:00', end: '22:00', price: 1500 },
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
        if (workStart.isAfter(moment(el.start, 'HH:mm').subtract(interval * 2, 'm')) && workStart.isBefore(workEnd)) {
          timeBlock.category = el.category;
          timeBlock.price = el.price;
        }
        // Определяем занят ли сеанс
        if (reservedSessions.hasOwnProperty(this.state.currentDate)) {
          if (reservedSessions[this.state.currentDate].includes(timeBlock.time)) {
            timeBlock.category = 'not available';
          }
        }
        if (moment().isAfter(moment(this.state.currentDate + ' ' + timeBlock.time, 'DD.MM.YY HH:mm'))) {
          timeBlock.category = 'not available';
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

  // Ручка выбора даты
  handleChangeDate = async (date) => {
    const currentDate = moment(date).format('DD.MM.YY');
    await this.setState({ currentDate: currentDate });
    this.setState({ selectedTime: [], sum: 0 });
    this.getTimeLapse();
  }

  handleSelectSession = async (time) => {
    // Меняем статус у сеансов для рендера
    let timeLapse = this.state.timeLapse;
    timeLapse.forEach(el => {
      if (el.time === time) {
        el.status = !el.status
      }
    })
    await this.setState({ timeLapse: timeLapse });

    // Получаем все выбранные сеансы в отдельный массив
    let selectedTime = [];
    this.state.timeLapse.forEach(el => {
      if (el.status === true) {
        selectedTime.push(el.time)
      }
    })
    await this.setState({ selectedTime: selectedTime })

    this.setState({ timeValidation: false });

    this.getGlasses();
  }

  // Проверка есть ли совпадения в 2 массивах
  areArraysDifferent = (massive) => {
    let check = false;

    if (massive) {
      massive.forEach(el => {
        if (this.state.selectedTime.includes(el)) {
          check = true;
        }
      })
    }

    return check;
  }

  // Делаем массив всех очков для рендера в выбранный сеанс выбранного дня
  getGlasses = () => {
    let headsetsPack = [];

    headsets.forEach(modelPack => {
      let modelSection = {};
      modelSection.model = modelPack.model;

      let glasses = [];
      modelPack.glasses.forEach(el => {
        if (this.areArraysDifferent(el['reserved'][this.state.currentDate])) {
          glasses.push('reserved');
        } else {
          glasses.push(false);
        }
      })
      modelSection.glasses = glasses;
      headsetsPack.push(modelSection);
    })

    this.setState({ headsetsPack: headsetsPack })
  }

  // Ручка выбора очков
  handleSelectGlasses = (index, model) => {
    let headsetsPack = this.state.headsetsPack;
    headsetsPack.forEach(el => {
      if (el.model === model) {
        el.glasses[index] = !el.glasses[index];
      }
    })

    this.setState({ headsetsPack: headsetsPack, headsetsValidation: false });
    this.getSum();
  }

  // Считаем общий счет
  getSum = () => {
    // Находим количество выбранных очков
    let headsetsCount = 0;
    this.state.headsetsPack.forEach(model => {
      let modelCount = model.glasses.filter(el => el === true).length;
      headsetsCount += modelCount;
    })

    // Цена выбранных сеансов за одни очки
    let priceForOne = 0;
    this.state.timeLapse.forEach(el => {
      if (el.status) {
        priceForOne += el.price
      }
    })

    this.setState({ sum: priceForOne * headsetsCount });
  }

  // Показывает подсказки валидации
  toPersonalDataValidation = () => {
    let check = true;

    if (this.state.selectedTime.length === 0) {
      this.setState({ timeValidation: true })
      check = false;
    } else if (this.state.sum === 0) {
      this.setState({ headsetsValidation: true })
      check = false;
    }

    return check
  }

  // Показывает попап сбора личных данных
  handlerPersonalDataPopup = () => {
    if (this.toPersonalDataValidation())
      this.setState({ PersonalDataPopupStatus: !this.state.PersonalDataPopupStatus })
  }

  render() {
    return (
      <ReservPopupWrapper status={this.props.status}>
        <Content>
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
              <ValidationHint status={this.state.timeValidation}>
                Выберите время
              </ValidationHint>
            </Paragraph>

            <DateField handleChangeDate={this.handleChangeDate} currentDate={this.state.currentDate} />

            <PriceCategorys>
              {prices.map((el, i) => {
                return <PriceCategory price={el.price} key={i} color={el.color} />
              })}
            </PriceCategorys>
          </DateAndPriceInfo>
          <TimeTable>
            {this.state.timeLapse.map((el, i) => {
              return <TimeItem
                time={el.time}
                category={el.category}
                status={el.status}
                key={i}
                handleSelectSession={this.handleSelectSession} />
            })}
          </TimeTable>

          <HeadsetsSectionWrapper status={this.state.selectedTime.length}>
            <HeadsetsInfo>
              <Paragraph>
                Выберите VR очки
                <ValidationHint status={this.state.headsetsValidation}>
                Выберите модель и количество VR очков
              </ValidationHint>
              </Paragraph>
            </HeadsetsInfo>

            <HeadsetsTable>
              {this.state.headsetsPack.map((section, i) => {
                return <ModelSection section={section} key={i} handleSelectGlasses={this.handleSelectGlasses} />
              })}
            </HeadsetsTable>
          </HeadsetsSectionWrapper>

          <ToPersonalData>
            <AddInfo>
              * При игре от 60 минут - скидка 10%<br />
              ** Скидка 30% в день рождения
            </AddInfo>
            <PriceInfo>
              <Sum>
                {this.state.sum} ₽
              </Sum>
              <Commission>
                Без комиссии
              </Commission>
            </PriceInfo>
            <ToPersonalDataButton onClick={this.handlerPersonalDataPopup}>
              Продолжить
            </ToPersonalDataButton>
          </ToPersonalData>

          <PersonalDataPopup
            reservPopupData={{
              clubId: this.props.club._id,
              date: this.state.currentDate,
              time: this.state.selectedTime,
              headsets: this.state.headsetsPack,
              sum: this.state.sum,
            }}
            status={this.state.PersonalDataPopupStatus}
            handler={this.handlerPersonalDataPopup} />

        </Content>
        <FadeScreen onClick={this.props.handleReservePopup} />
      </ReservPopupWrapper>
    );
  }
}

export default ReservPopup;